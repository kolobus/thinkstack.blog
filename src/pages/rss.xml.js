import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Think Stack',
    description: 'Digging into tech ideas to understand how they actually work.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
