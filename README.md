# Field Notes

A Hugo site for collecting posts, weeknotes, and related metadata. This repository includes a customised setup on top of the PaperMod theme.

## Contributing content

Follow these conventions when adding new Markdown files under `content/`.

### Naming files
- **Posts** live in `content/posts/` and should be named with the publication date followed by a short slug, e.g. `2025-02-14-systems-thinking.md`.
- **Weeknotes** live in `content/weeknotes/` and should follow the ISO week ending date, e.g. `2025-02-14.md`.
- Avoid spaces in filenames. Use lowercase letters and hyphens to make future URLs predictable.

### Slugs and aliases
- Prefer the automatically generated slug that comes from the filename. Override it in the front matter only when necessary (for example, to preserve an old URL).
- When you change a slug, add the previous URL to the `aliases` array so that existing links continue to work.

### Summaries and descriptions
- Provide a short `summary` for every post or weeknote. This text is used on listing pages and in RSS feeds.
- If additional context is helpful, add a longer introduction below the front matter.

### Tags, categories, and series
- Add 3–5 descriptive `tags` to every entry so that related notes are easy to discover.
- Use `categories` sparingly for high-level groupings. Reserve them for durable themes or areas of practice.
- Create a `series` only when you have (or plan) multiple instalments on the same topic.

### Cover images
- Supply a `cover.image` path when a hero image is available. The path should be relative to the `static/` directory (for example: `/images/observatory.jpg`).
- Add accompanying `alt`, `caption`, and `credit` text when applicable to provide context and attribution.

## Local development

```bash
hugo server --buildDrafts --buildFuture
```

The command above runs the site locally, including draft content for review.
