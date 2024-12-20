import { getCollection } from "astro:content";

export const getSortedBlogEntries = async () => {
  const blogEntries = (await getCollection("blog")).map((item) => ({
    ...item,
    data: {
      ...item.data,
      pubDate: new Date(item.data.pubDate),
    },
  }));
  blogEntries.sort((a, b) => b.data.pubDate - a.data.pubDate);
  return blogEntries;
};
