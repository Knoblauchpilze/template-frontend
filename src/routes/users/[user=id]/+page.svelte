<script lang="ts">
	import pageTitle from '$lib/stores/ui/pageTitle';

	import { FlexContainer, StyledButton, StyledTitle } from '@totocorpsoftwareinc/frontend-toolkit';

	// https://svelte.dev/blog/zero-config-type-safety
	// https://svelte.dev/docs/kit/load#Page-data
	let { data } = $props();

	pageTitle.set(data.wepageTitle);

	const labelStyle = 'font-bold px-2 text-right';
	const fieldStyle = 'text-secondary';
</script>

<FlexContainer>
	<StyledTitle text="User details" />

	<table class="text-secondary">
		<tbody>
			<tr>
				<td class={labelStyle}>ID:</td>
				<td class={fieldStyle}>{data.user.id}</td>
			</tr>
			<tr>
				<td class={labelStyle}>E-mail:</td>
				<td class={fieldStyle}>{data.user.email}</td>
			</tr>
			<tr>
				<td class={labelStyle}>Password:</td>
				<td class={fieldStyle}>{data.user.password}</td>
			</tr>
			<tr>
				<td class={labelStyle}>API key:</td>
				<td class={fieldStyle}>{data.apiKey}</td>
			</tr>
			<tr>
				<td class={labelStyle}>Member since:</td>
				<td class={fieldStyle}>{data.user.createdAt}</td>
			</tr>
		</tbody>
	</table>

	<form method="POST" action="?/logout">
		<StyledButton text="Logout" />
	</form>
</FlexContainer>
