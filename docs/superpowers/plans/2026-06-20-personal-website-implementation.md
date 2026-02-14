# Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved single-column personal homepage with light/dark theme switching and a simple projects list.

**Architecture:** Keep the Astro site mostly static. Use one centered page composition with semantic sections, CSS custom properties for theming, and a tiny inline script in the layout to initialize and persist theme choice.

**Tech Stack:** Astro 6, Tailwind import already present, global CSS, small inline browser script

---

## File Structure

- Modify: `src/layouts/Layout.astro` for page metadata and early theme initialization
- Modify: `src/components/Header.astro` for intro block and toggle button
- Modify: `src/components/Home.astro` for rewritten about copy and placeholder projects list
- Modify: `src/components/Footer.astro` for minimal footer styling/content structure
- Modify: `src/styles/global.css` for editorial layout and theme tokens

### Task 1: Theme Foundation

**Files:**
- Modify: `src/layouts/Layout.astro`
- Modify: `src/styles/global.css`

- [ ] Add an early inline script that reads `localStorage.theme`, falls back to system preference, and sets `data-theme` on `<html>`.
- [ ] Define shared color tokens and light/dark overrides in `src/styles/global.css`.
- [ ] Add base document styles for background, text, links, spacing, and transitions.

### Task 2: Homepage Structure

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/Home.astro`
- Modify: `src/components/Footer.astro`

- [ ] Rework the header into a compact intro block with name, role statement, and theme toggle.
- [ ] Rewrite the about copy into a shorter personal description.
- [ ] Add a local placeholder project array and render a simple vertical list with title, description, and link.
- [ ] Simplify the footer so it matches the editorial layout.

### Task 3: Responsive Polish

**Files:**
- Modify: `src/styles/global.css`

- [ ] Add single-column spacing, section separators, and narrow reading width.
- [ ] Make the theme switch align cleanly on desktop and stack naturally on smaller screens.
- [ ] Ensure project items wrap cleanly and preserve readable spacing.

### Task 4: Verification

**Files:**
- None

- [ ] Run `npm run build`.
- [ ] Review the diff to confirm only intended homepage files changed.
