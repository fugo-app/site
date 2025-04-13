// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fugo',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fugo-app/fugo' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Quick Start', slug: 'guides/quick-start' },
					],
				},
			],
		}),
	],
});
