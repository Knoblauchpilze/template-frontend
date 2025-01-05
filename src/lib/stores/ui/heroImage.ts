import { writable } from 'svelte/store';

const HOMEPAGE_HERO_IMAGE: string = 'bg-homepage';

export { HOMEPAGE_HERO_IMAGE };

export default writable(HOMEPAGE_HERO_IMAGE);
