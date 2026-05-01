import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const log = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/log" }),
  schema: z.object({
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { log };
