import { ApiKeyResponseDto } from '$lib/communication/api/apiKeyResponseDto';
import { setSessionCookies } from '$lib/cookies';
import { getErrorMessageFromApiResponse } from '$lib/rest/api';
import { loginUser } from '$lib/services/sessions';
import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import {
	getHttpStatusCodeFromApiFailure,
	HttpStatus,
	parseApiResponseAsSingleValue,
	tryGetFailureReason
} from '@totocorpsoftwareinc/frontend-toolkit';

export const login = async ({ cookies, request }: RequestEvent) => {
	const data = await request.formData();

	const email = data.get('email');
	const password = data.get('password');
	if (!email) {
		// https://svelte.dev/docs/kit/form-actions
		return fail(HttpStatus.UNPROCESSABLE_ENTITY, {
			message: 'Please fill in the email',
			email: email
		});
	}
	if (!password) {
		return fail(HttpStatus.UNPROCESSABLE_ENTITY, {
			message: 'Please fill in the password',
			email: email
		});
	}

	const apiResponse = await loginUser(email as string, password as string);
	if (apiResponse.isError()) {
		const failure = tryGetFailureReason(apiResponse);
		const code = getHttpStatusCodeFromApiFailure(failure);

		return fail(code, {
			message: getErrorMessageFromApiResponse(apiResponse),
			email: email
		});
	}

	const apiKeyDto = parseApiResponseAsSingleValue(apiResponse, ApiKeyResponseDto);
	if (apiKeyDto === undefined) {
		return fail(HttpStatus.INTERNAL_SERVER_ERROR, {
			message: 'Failed to get login data',
			email: email
		});
	}

	setSessionCookies(cookies, apiKeyDto);
	redirect(HttpStatus.SEE_OTHER, '/users/' + apiKeyDto.user);
};
