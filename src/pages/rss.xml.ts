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
    // The default appends "/" after the #fragment, which breaks the anchor.
    trailingSlash: false,
    // Entries are untitled short posts, so the post itself is the description.
    // Link to the archive: /log/ only shows the most recent entries.
    items: sorted.map((entry) => ({
      description: entry.rendered?.html ?? entry.body,
      pubDate: entry.data.date,
      link: `/log/archive/#${entry.id}`,
    })),
  });
}
