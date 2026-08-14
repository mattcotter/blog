import rss from '@astrojs/rss';
import { loadPosts } from '../utils/posts.js';
import { site } from '../data/site.js';

// Posts are page-based Markdown in src/pages/blog, so read them the same way
// every other page does rather than through a content collection.
const posts = loadPosts(import.meta.glob('./blog/*.md', { eager: true }));

export async function GET(context) {
  return rss({
    title: `${site.name} — Writing`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.pubDate),
      description: post.description || post.excerpt,
      link: post.url,
      categories: post.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
