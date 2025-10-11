# Field Notes Agent Guidelines

This repository hosts a Hugo site for weekly notes. Follow the guidelines below when editing or adding files within this project.

## General Practices
- Keep all content in Markdown with UTF-8 encoding.
- Wrap front matter in triple dashes (`---`). Use YAML syntax.
- Use lowercase filenames with hyphenated words when possible. Weeknotes should use the pattern `wNN.md` inside the appropriate year folder.
- Prefer line lengths under 100 characters for readability.

## Weeknotes Content (`content/weeknotes/`)
When creating or updating weeknote entries, follow this structure:

1. **Front Matter**
   - `title`: `"Week NN — YYYY-MM-DD"` (em dash between week number and date).
   - `date`: ISO format date (`YYYY-MM-DD`).
   - `draft`: `false` when ready to publish.
   - `tags`: include `weeknotes`, the week token (`WNN`), and the year (`YYYY`).
   - `summary`: a one-sentence overview using plain text.
   - `slug`: the lowercase week identifier (`wNN`).
2. **Body Structure**
   - Begin with level-2 headings (`##`) for sections such as `Highlights`, `Lowlights`, and any optional sections like `Reading`, `Listening`, or `Notes` as needed.
   - Use bulleted lists under each heading. Keep list items concise but descriptive.
   - Close the file with the shortcode `{{< weeknav >}}` on its own line to enable previous/next navigation.

## Taxonomies and Index Pages (`content/weeknotes/_index.md`)
- Update summaries and descriptions to reflect the tone of recent entries.
- Ensure front matter lists the `title`, `description`, and `type` fields consistent with Hugo conventions.

## Layouts and Shortcodes (`layouts/`)
- Keep template logic minimal and readable. Use indentation of two spaces.
- When editing shortcodes, document expected parameters at the top of the file in comments.

## Static Assets (`static/`)
- Optimize images before committing. Prefer `.webp` or `.avif` when possible.
- Place downloads or auxiliary files in appropriately named subdirectories.

## Tooling
- Run `hugo` to verify the site builds before committing major changes.
- If dependencies are updated, reflect them in `go.mod` and `go.sum` together.

