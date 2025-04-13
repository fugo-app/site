// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	site: 'https://fugo.app',
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'Fugo',
			favicon: 'favicon.svg',
			logo: {
				src: './src/assets/logo.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fugo-app/fugo' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Quick Start', slug: 'guides/quick-start' },
						{ label: 'Config', slug: 'guides/config' },
						{ label: 'Agents', slug: 'guides/agents' },
						{ label: 'Fields', slug: 'guides/fields' },
					],
				},
				{
					label: 'Inputs',
					items: [
						{ label: 'Files', slug: 'inputs/files' },
					],
				},
				{
					label: 'API',
					items: [
						{ label: 'Querying Logs', slug: 'api/querying-logs' },
						{ label: 'Pagination', slug: 'api/pagination' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'Nginx', slug: 'examples/nginx' },
						{ label: 'Kubernetes', slug: 'examples/kubernetes' },
					],
				},
			],
		}),
	],
});
