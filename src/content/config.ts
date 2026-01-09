import { defineCollection, z } from "astro:content";

const log = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { log };
