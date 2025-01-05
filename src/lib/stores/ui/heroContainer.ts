import { writable } from 'svelte/store';

export type HeroContainerProps = {
	width: string;
	height: string;
	color: string;
};

const HOMEPAGE_HERO_CONTAINER_PROPS: HeroContainerProps = {
	width: 'w-1/3',
	height: 'h-1/2',
	color: 'bg-overlay'
};

export { HOMEPAGE_HERO_CONTAINER_PROPS };

export default writable(HOMEPAGE_HERO_CONTAINER_PROPS);
