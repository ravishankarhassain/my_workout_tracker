# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A vanilla JS Progressive Web App (PWA) for tracking a 6-week "Lean Mass" full-body workout plan. No build step, no framework, no npm — just static files served from GitHub Pages.

## How to run/test

Open `index.html` directly in a browser, or serve it locally:

```
npx serve .
# or
python -m http.server 8080
```

After making changes, re-upload the changed files to the GitHub Pages repo. `config.js` is gitignored-by-convention (it holds the user's Supabase credentials) — never overwrite it.

**Cache busting:** `index.html` loads `app.js?v=N` and `styles.css?v=N`. Increment `N` whenever you change either file, or the service worker will serve the old cached version in the browser. The current version is `v3`.

## Architecture

Everything lives in these files:

- **`app.js`** — all application logic (~2100 lines, single file). Structure:
  - `PLAN` constant — the workout program (Days A/B/C/D, exercises, sets/reps, video URLs, `muscles`, `type`, `alt`)
  - `state` object — single source of truth for current screen, session in progress, UI toggles
  - `render()` — full re-render on every state change; sets `app.innerHTML` then calls `attachHandlers()`
  - Screen renderers: `renderHome`, `renderSession`, `renderCalendar`, `renderHistory`, `renderProgress`
  - Supabase push helpers: `pushSessionToSupabase`, `pushBodyWeightToSupabase`, `pushCustomPlanExerciseToSupabase`, `pushVideoOverrideToSupabase`
  - Offline queue: `queuePendingSync` / `syncPendingItems` — items retry on next online/focus event
  - `attachHandlers()` — single delegated click/input listener using `data-action` attributes

- **`config.js`** — Supabase URL + anon key (user fills in; placeholder triggers local-only mode)

- **`styles.css`** — all styles; dark/light theme via CSS custom properties; responsive desktop sidebar at 768px+

- **`sw.js`** — service worker for offline caching (cache-first for static assets). Cache name is `lean-mass-tracker-v3` — bump when deploying breaking changes so old caches are evicted.

- **`setup.sql`** — Supabase table definitions: `workout_sessions`, `body_weight_logs`, `custom_plan_exercises`, `exercise_video_overrides`. Safe to re-run.

## Key patterns

**Rendering:** state mutation → `render()`. Never mutate the DOM directly. The `data-action` attribute on any element is the action string handled in `attachHandlers()`.

**Local storage keys:**
- `leanMassTrackerV1` — all user data (sessions, body weights, custom exercises, video overrides, pending sync queue). Shape defined by `EMPTY_DATA`.
- `leanMassTrackerTheme` — `"dark"` or `"light"`, applied at page load via `applyTheme()`.
- `leanMassTrackerSessionDraft` — in-progress session state; saved on every meaningful change and restored on page reload via `restoreDraftSession()`.

**Theme:** `applyTheme(theme)` sets `data-theme` on `<html>`. CSS variables switch between dark (`:root`) and light (`[data-theme="light"]`) values. Toggle is in the user avatar dropdown menu.

**Date formatting:** Always use `fmtDate(d)` which uses local `getFullYear/getMonth/getDate`. Never use `toISOString()` — it converts to UTC and causes off-by-one errors for users east of UTC (e.g. IST UTC+5:30).

**Video guides:** `VIDEO_GUIDES` map is built at startup from `PLAN`. User overrides live in `state.data.videoOverrides`. Resolution order in `getVideoUrl()`: user override → plan default → session custom exercise URL → null.

**Auth flow:** if `config.js` has placeholder values, `SUPABASE_CONFIGURED` is false, auth is skipped, and the app runs fully local. Otherwise it shows a Google sign-in screen first.

**Custom exercises:** added per-session or permanently ("always include in Day X"). Permanent ones are stored in `state.data.customPlanExercises[dayKey][]` locally and in the `custom_plan_exercises` Supabase table.

**Offline sync queue:** failed Supabase pushes are saved to `state.data.pendingSync[]` (persisted in localStorage). `syncPendingItems()` retries them on: app init, `window.addEventListener("online")`, and every 30 seconds via `setInterval`. Pending count is shown as an amber badge on the Home screen and inside the avatar dropdown.

## PLAN data shape

Each exercise in `PLAN[dayKey].exercises` has:

```js
{
  name: "Leg Press Calf Raises",
  sets: 3,
  reps: "12",
  muscles: "Calves",          // displayed as a badge
  type: "isolation",          // "compound" or "isolation" — badge color differs
  video: "https://...",       // guide link; shown as ▶ next to exercise name
  isAbs: true,                // optional — marks abs finisher exercises
  alt: {                      // optional — safer alternative exercise
    name: "Seated Calf Raise Machine",
    sets: 3,
    reps: "12",
    reason: "Seated position avoids blood pressure spike and dizziness risk"
  }
}
```

Each day also has a `note` string (coaching cue shown in the session header area).

## Session exercise swap

Exercises with an `alt` field show an inline "▼ ALT" button next to the exercise name. Tapping it expands a panel with the alternative's name, reason, sets, and reps, plus a "⇄ Swap to this exercise" button.

Swaps are stored in `session.swappedExercises[originalName] = { altName, altSets, altReps }`. `getSessionExercises()` applies swaps when building the exercise list, so the nav chip and set tracking automatically use the alt exercise name. A "↩ [original]" revert button is shown on the swapped card. Swaps are persisted in the session draft.

## Responsive layout

At 768px+ the bottom nav becomes a fixed left sidebar (220px wide) and `#app` gets `margin-left: 220px`. Implemented purely in CSS via a media query on `.bottom-nav`.

## Confirm modal

`state.confirmModal = { icon, title, message, yesLabel, noLabel, yesAction, danger }` triggers a styled overlay modal instead of the browser's native `confirm()`. Set `danger: true` for a red confirm button (e.g. sign-out). Dismiss by setting `state.confirmModal = null`.
