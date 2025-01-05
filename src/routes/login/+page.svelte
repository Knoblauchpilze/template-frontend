<script lang="ts">
	import {
		FlexContainer,
		FormField,
		StyledButton,
		StyledError,
		StyledText,
		StyledTitle
	} from '@totocorpsoftwareinc/frontend-toolkit';

	import heroImage, { HOMEPAGE_HERO_IMAGE } from '$lib/stores/ui/heroImage';
	import heroContainer, { HOMEPAGE_HERO_CONTAINER_PROPS } from '$lib/stores/ui/heroContainer';

	interface Props {
		form: HTMLFormElement;
	}

	let { form = $bindable() }: Props = $props();

	function resetFormError() {
		if (!form) {
			return;
		}
		form.message = '';
	}

	heroImage.set(HOMEPAGE_HERO_IMAGE);
	heroContainer.set(HOMEPAGE_HERO_CONTAINER_PROPS);
</script>

<FlexContainer>
	<FlexContainer extensible={false} styling="h-1/5">
		<StyledTitle text="Template frontend" />
	</FlexContainer>

	<FlexContainer extensible={false} styling="h-3/5">
		<StyledText text="Login" />
		<form method="POST" action="?/login" class="flex flex-1 flex-col justify-evenly">
			<FormField label="email:" labelId="email" labelStyling={'text-secondary'}>
				<input
					id="email"
					type="text"
					name="email"
					placeholder="Enter your email address"
					required
					value={form?.email ?? ''}
					oninput={resetFormError}
				/>
			</FormField>
			<FormField label="password:" labelId="password" labelStyling={'text-secondary'}>
				<input
					id="password"
					type="text"
					name="password"
					placeholder="Enter your password"
					required
					oninput={resetFormError}
				/></FormField
			>
			<StyledButton text="Login" />
		</form>

		{#if form?.message}
			<div class="fixed bottom-4">
				<StyledError text="Failed to login: {form.message}" />
			</div>
		{/if}
	</FlexContainer>
</FlexContainer>
