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
			components: {
				Head: './src/components/Head.astro',
			},
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
						{ label: 'System Metrics', slug: 'inputs/system' },
					],
				},
				{
					label: 'API',
					items: [
						{ label: 'Query', slug: 'api/query' },
						{ label: 'Pagination', slug: 'api/pagination' },
						{ label: 'Agents', slug: 'api/agents' },
						{ label: 'Schema', slug: 'api/schema' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'Nginx', slug: 'examples/nginx' },
						{ label: 'Podman', slug: 'examples/podman' },
						{ label: 'System Metrics', slug: 'examples/system' },
					],
				},
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://sa.fugo.app/latest.js',
						async: true,
					},
				},
			],
		}),
	],
});
