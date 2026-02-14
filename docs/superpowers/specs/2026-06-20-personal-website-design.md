# Personal Website Design

## Summary

Build a simple personal website homepage in Astro for a software developer. The page should feel editorial, quiet, and personal rather than like a SaaS landing page or portfolio template. It must support light and dark themes, present a short personal introduction, and include a simple project list with title, description, and link.

## Goals

- Present the site owner as a software developer in a direct, personal way.
- Keep the layout simple enough to read like a personal page, not a product page.
- Support manual theme switching between light and dark mode.
- Add a project section that is easy to expand later.
- Preserve a clean Astro structure without adding unnecessary dependencies.

## Non-Goals

- No multi-page portfolio structure.
- No filtering, tagging, or search for projects.
- No CMS or external data source.
- No decorative hero section, analytics cards, or dashboard patterns.

## User Experience

The homepage is a single reading column centered on the page. The first visible block introduces the site owner with their name and a short role statement. A small theme toggle sits alongside the introduction in desktop layouts and moves naturally in smaller screens.

Below the introduction, an About section presents a concise and more personal version of the existing biography. Under that, a Projects section shows a simple vertical list of projects. Each item contains:

- project title
- short description
- external or internal link

The page should feel calm and legible in both themes. The interface should not rely on large cards, gradients, badges, or visual flourishes.

## Layout and Visual Direction

### Structure

1. Intro block
2. About section
3. Projects section
4. Minimal footer

### Styling direction

- Single-column layout with comfortable reading width.
- Minimal editorial tone.
- Warm neutral palette in light mode and warm charcoal palette in dark mode.
- Thin borders, restrained corner radius, and little or no shadow.
- Clear typography hierarchy without decorative labels or over-designed headings.

### Responsive behavior

- Desktop: keep the content in one centered column.
- Mobile: preserve the same order, with tighter spacing and the theme toggle flowing naturally within the intro area.
- Project items remain stacked in a vertical list on all sizes.

## Theme Behavior

Theme switching should support:

- `light`
- `dark`
- system preference on first visit

Implementation requirements:

- Use a small client-side script to read and persist the selected theme in local storage.
- Apply the theme early enough to avoid a visible flash of the wrong theme.
- Use semantic CSS custom properties for colors so both themes share the same structure.

## Content Plan

### Intro

- Site owner name
- One short statement describing them as a software developer

### About

- Rewrite the current homepage copy into a shorter and more personal voice
- Keep the tone professional and direct

### Projects

Seed the page with placeholder items that are structurally correct and easy to replace later. Each placeholder item should contain:

- title
- one-sentence description
- link label

## Technical Design

- Continue using the existing Astro page structure.
- Replace or refactor the current homepage component as needed.
- Keep the implementation lightweight and mostly static.
- Store project data in a simple local array inside the component unless an existing local pattern suggests otherwise.
- Put theme styles in the existing global stylesheet unless a smaller scoped placement is clearly better.

## Error Handling and Edge Cases

- If JavaScript is unavailable, the page should remain readable in a default theme.
- If no theme preference is stored, use system preference.
- Long project titles or descriptions should wrap cleanly without breaking layout.

## Testing and Verification

- Verify the page renders correctly in Astro development mode.
- Verify manual switching between light and dark themes.
- Verify theme preference persists after reload.
- Verify the layout remains readable on a narrow mobile viewport.
- Verify placeholder project links render consistently.

## Acceptance Criteria

- Homepage uses a single-column personal-site layout.
- The design feels minimal and editorial rather than like a startup template.
- A visible theme switch allows changing between light and dark modes.
- The About section uses rewritten personal copy.
- The Projects section displays a simple list with title, description, and link for each item.
- The page works without adding unnecessary libraries.
