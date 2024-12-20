import { MediumItemSchema } from "@/schema/medium";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "." }),
  schema: MediumItemSchema,
});

export const collections = {
  blog: blogCollection,
};
