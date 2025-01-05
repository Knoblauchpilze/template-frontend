import { UserResponseDto } from '$lib/communication/api/userResponseDto';
import { describe, expect, it } from 'vitest';
import { userResponseDtoToUserUiDto } from './userConverter';

const SAMPLE_USER_DATA = {
	id: 'e6e68c94-8ff6-483a-94bf-95aecaf2aab2',
	email: 'my-email@domain.com',
	password: 'the-password',
	createdAt: '2025-01-05T14:56:32.717344+00:00'
};

describe.concurrent('Converting API response to UI DTO', () => {
	it('should preserve user ID', () => {
		const inputDto = new UserResponseDto(SAMPLE_USER_DATA);
		const actual = userResponseDtoToUserUiDto(inputDto);
		expect(actual.id).toBe(SAMPLE_USER_DATA.id);
	});

	it('should preserve user email', () => {
		const inputDto = new UserResponseDto(SAMPLE_USER_DATA);
		const actual = userResponseDtoToUserUiDto(inputDto);
		expect(actual.email).toBe(SAMPLE_USER_DATA.email);
	});

	it('should preserve user password', () => {
		const inputDto = new UserResponseDto(SAMPLE_USER_DATA);
		const actual = userResponseDtoToUserUiDto(inputDto);
		expect(actual.password).toBe(SAMPLE_USER_DATA.password);
	});

	it('should preserve creation date', () => {
		const inputDto = new UserResponseDto(SAMPLE_USER_DATA);
		const actual = userResponseDtoToUserUiDto(inputDto);
		expect(actual.createdAt).toBe('January 5, 2025 at 14:56:32');
	});
});
