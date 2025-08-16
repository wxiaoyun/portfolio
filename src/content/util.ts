import { getCollection } from "astro:content";

export const getSortedBlogEntries = async () => {
  const blogEntries = (await getCollection("blog"))
    .filter((item) => {
      if (!item.filePath) {
        return true;
      }

      const filePath = item.filePath.split("/");
      const filenameParts = filePath[filePath.length - 1].split(".");
      const isDraft = filenameParts.includes("draft");

      if (isDraft) {
        console.log("Skipping draft: ", item.filePath);
      }

      return !isDraft;
    })
    .map((item) => ({
      ...item,
      data: {
        ...item.data,
        pubDate: new Date(item.data.pubDate),
      },
    }));

  blogEntries.sort((a, b) => (a.data.pubDate < b.data.pubDate ? 1 : -1));
  return blogEntries;
};
