import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const logs = await getCollection("log");
  const sorted = logs.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: "Benjamin Fink - Log",
    description: "Dev log - thoughts, learnings, and things I'm working on.",
    site: context.site!,
    items: sorted.map((entry) => ({
      title: entry.slug,
      pubDate: entry.data.date,
      link: `/log/#${entry.slug}`,
    })),
  });
}
