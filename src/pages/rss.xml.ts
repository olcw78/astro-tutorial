import rss, {pagesGlobToRssItems} from "@astrojs/rss";

export async function get() {
    return rss({
        title: 'Learning Astro.js | blog',
        description: 'My journey learning Astro.',
        site: 'https://my-astro-blogs.netlify.app',
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: '<language>en-us</language>'
    })
}