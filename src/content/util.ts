import { getCollection } from "astro:content";

const isDraft = (filePath: string = "") => {
  const pathParts = filePath.split("/");
  const filenameParts = pathParts[pathParts.length - 1].split(".");
  return filenameParts.includes("draft");
};

export const getSortedBlogEntries = async () => {
  const blogEntries = (await getCollection("blog"))
    .filter((item) =>
      // If in development mode, show all drafts
      process.env.NODE_ENV === "development" ? true : !isDraft(item.filePath),
    )
    .map((item) => ({
      ...item,
      data: {
        ...item.data,
        title: isDraft(item.filePath)
          ? `[DRAFT] ${item.data.title}`
          : item.data.title,
        pubDate: new Date(item.data.pubDate),
      },
    }));

  blogEntries.sort((a, b) => (a.data.pubDate < b.data.pubDate ? 1 : -1));
  return blogEntries;
};
