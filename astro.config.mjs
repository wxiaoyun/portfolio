// @ts-check
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

export default defineConfig({
  prefetch: {
    defaultStrategy: "viewport",
  },
  output: "static",
  site: "https://wxiaoyun.com/",
  image: {
    domains: ["miro.medium.com"],
  },
  markdown: {
    gfm: true,
    shikiConfig: {
      theme: "tokyo-night",
    },
    remarkPlugins: [remarkToc, remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
  integrations: [solidJs({ devtools: true }), mdx()],
  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: "lightningcss",
    },
  },
});
