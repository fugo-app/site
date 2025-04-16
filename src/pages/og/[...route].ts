import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const entries = await getCollection('docs')
const pages = Object.fromEntries(entries.map(({ id, data }) => [id, data]))

export const { getStaticPaths, GET } = OGImageRoute({
    param: 'route',
    pages,
    getImageOptions: (path, page) => ({
        title: page.title,
        description: page.description,
        logo: {
            path: './src/assets/images/og-logo.png',
        },
        bgGradient: [[255, 255, 255]],
        border: {
            color: [254, 154, 0],
            width: 15,
            side: 'block-end',
        },
        fonts: [
            './src/assets/fonts/Roboto.ttf',
        ],
        font: {
            title: {
                color: [41, 37, 38],
                size: 70,
                families: ['Roboto'],
            },
            description: {
                color: [41, 37, 38],
                size: 24,
                families: ['Roboto'],
            },
        },
    }),
})
