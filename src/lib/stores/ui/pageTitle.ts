import { writable } from 'svelte/store';

const HOMEPAGE_TITLE: string = 'Template frontend';

export { HOMEPAGE_TITLE };

export default writable(HOMEPAGE_TITLE);
