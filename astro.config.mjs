// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
	site: 'https://fugo.app',
	integrations: [
		starlight({
			plugins: [starlightThemeNova()],
			title: 'Fugo',
			logo: {
				src: './src/assets/logo.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fugo-app/fugo' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Quick Start', slug: 'guides/quick-start' },
					],
				},
				{
					label: 'Inputs',
					items: [
						{ label: 'Files', slug: 'inputs/files' },
					],
				},
			],
		}),
	],
});
