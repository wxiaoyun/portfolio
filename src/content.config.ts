import { MediumItemSchema } from "@/schema/medium";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: MediumItemSchema,
});

export const collections = {
  blog: blogCollection,
};
