import { resetSessionCookies } from '$lib/cookies';
import { login } from '$lib/actions/login';

export async function load({ cookies }) {
	resetSessionCookies(cookies);
}

export const actions = {
	login: login
};
