import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Antar Logs",
    description: "A log of things I build, break, and understand.",
    site: context.site, // IMPORTANT: set site in astro.config
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}`,
    })),
  });
}
