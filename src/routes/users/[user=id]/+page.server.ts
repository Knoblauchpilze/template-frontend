import { error } from '@sveltejs/kit';
import { HttpStatus, parseApiResponseAsSingleValue } from '@totocorpsoftwareinc/frontend-toolkit';

import { loadSessionCookiesOrRedirectToLogin } from '$lib/cookies';
import { handleApiError, redirectToLoginIfNeeded } from '$lib/rest/api';
import { getUser } from '$lib/services/users';
import { UserResponseDto } from '$lib/communication/api/userResponseDto';
import { userResponseDtoToUserUiDto } from '$lib/converters/userConverter';
import { logout } from '$lib/actions/logout';

export async function load({ params, cookies, depends }) {
	const sessionCookies = loadSessionCookiesOrRedirectToLogin(cookies);

	depends('data:planet');

	const apiResponse = await getUser(sessionCookies.apiKey, params.user);
	redirectToLoginIfNeeded(apiResponse);
	handleApiError(apiResponse);

	// https://www.okupter.com/blog/sveltekit-cannot-stringify-arbitrary-non-pojos-error
	const userDto = parseApiResponseAsSingleValue(apiResponse, UserResponseDto);
	if (userDto === undefined) {
		error(HttpStatus.INTERNAL_SERVER_ERROR, 'Failed to get server data');
	}

	return {
		wepageTitle: 'Hello ' + userDto.email + '!',

		user: userResponseDtoToUserUiDto(userDto),
		apiKey: sessionCookies.apiKey
	};
}

export const actions = {
	logout: logout
};
