# Lean Mass Tracker — Android PWA + Supabase Sync

A workout tracker for your 6-week Lean Mass Full Body program. Tracks weight,
reps, and notes per set, with history and progress charts. Installs to your
Android home screen, works offline, and (optionally) syncs your data to the
cloud via Supabase so it's backed up and available across devices.

---

## Part 1 — Set up Supabase (cloud sync)

This step is optional but recommended — without it, your data only lives in
this phone's browser storage.

1. Go to https://supabase.com and create a free account + new project.
   Pick any name/region, set a database password (you won't need it day-to-day).

2. Once the project is ready, open **SQL Editor** in the left sidebar,
   click **New query**, paste the entire contents of `setup.sql` (included
   in this folder), and click **Run**. This creates the `workout_sessions`
   table with security rules so only you can see your data.

3. Go to **Project Settings → API**. Copy:
   - **Project URL**
   - **anon public** key

4. Open `config.js` in this folder and paste them in:
   ```js
   const SUPABASE_URL = "https://xxxxxxxx.supabase.co";
   const SUPABASE_ANON_KEY = "eyJ...";
   ```

5. Go to **Authentication → URL Configuration** in Supabase. You'll set
   **Site URL** and **Redirect URLs** to your GitHub Pages URL once you have
   it (Part 2, step 5) — come back to this after deploying.

The anon key is safe to include in a public repo — it's designed to be
public, and the Row Level Security rules from `setup.sql` ensure each
person can only read/write their own rows.

---

## Part 1.5 — Set up Google sign-in

The app uses **"Continue with Google"** to sign in — no passwords or email
links. This needs a one-time setup in Google Cloud and Supabase.

1. Go to https://console.cloud.google.com and create a new project (or use
   an existing one).

2. Go to **APIs & Services → OAuth consent screen**. Choose **External**,
   fill in an app name (e.g. "Lean Mass Tracker") and your email, and save.
   It's fine to leave it in "Testing" mode — add your own Google account
   under **Test users** if prompted.

3. Go to **APIs & Services → Credentials → Create Credentials → OAuth
   client ID**. Choose **Web application**.

4. In Supabase, go to **Authentication → Providers → Google** and copy the
   **Callback URL (for OAuth)** shown there (looks like
   `https://xxxxxxxx.supabase.co/auth/v1/callback`).

5. Back in Google Cloud, paste that into **Authorized redirect URIs**.
   Under **Authorized JavaScript origins**, add your GitHub Pages URL
   (e.g. `https://yourusername.github.io`) — come back to add this after
   Part 2 if you don't have it yet.

6. Click **Create**. Copy the **Client ID** and **Client Secret**.

7. Back in Supabase's Google provider settings, paste the **Client ID** and
   **Client Secret**, toggle it **Enabled**, and save.

---

## Part 2 — Host on GitHub Pages

1. Create a free GitHub account if you don't have one: https://github.com/signup
2. Create a new repository (e.g. `lean-mass-tracker`), set it to **Public**.
3. Upload **all files** in this folder to the repository root, including
   your edited `config.js` (Add file -> Upload files on the GitHub website).
4. Go to the repo's **Settings -> Pages**. Under "Source", select the `main`
   branch and `/ (root)` folder, then Save.
5. Wait a minute — GitHub gives you a URL like:
   `https://yourusername.github.io/lean-mass-tracker/`

6. **Back in Supabase** -> Authentication -> URL Configuration:
   - Set **Site URL** to that GitHub Pages URL
   - Add it to **Redirect URLs** too (e.g. `https://yourusername.github.io/lean-mass-tracker/`)

   This step is required — without it, sign-in won't redirect back to your
   app correctly.

7. **Back in Google Cloud** -> Credentials -> your OAuth client -> add
   `https://yourusername.github.io` (no trailing path) to **Authorized
   JavaScript origins**, if you didn't already in Part 1.5.

---

## Part 3 — Install on your phone

1. Open your GitHub Pages URL in **Chrome on Android**.
2. Tap **Continue with Google** and sign in with your Google account.
   (Sign in with the same Google account on any other device to access the
   same data.)
3. Tap **menu (3 dots) -> "Add to Home screen" / "Install app"**.
4. The blue dumbbell icon appears on your home screen — open it for the
   full-screen app experience.

If you skip Part 1 entirely (leave `config.js` as-is with "YOUR-PROJECT"),
the app runs in **local-only mode** — no sign-in screen, data just saves to
this phone's browser.

---

## How data syncing works

- Every finished session is saved to your phone instantly (works offline),
  and pushed to Supabase in the background when you have a connection.
- On sign-in, the app pulls your full history from Supabase so a new device
  shows all your past sessions.
- Tap the cloud icon badge on the Home screen to sign out.

---

## App features

- **Home** — today's suggested workout based on the day of the week
  (Mon=A, Tue=B, Wed=Rest+Walk, Thu=C, Fri=D, Sat/Sun=Rest), stats, a body
  weight quick-log, and the weekly schedule.
- **Session** — log weight (kg) and reps for each set, tap the checkmark to
  mark a set done, add notes about how it felt, then "Save & Finish". Tap
  **"+ Add"** to add any extra exercise on the fly — tick "Always include in
  Day X" to have it appear automatically every time you do that day, and
  optionally attach a video guide link to it.
- **Exercise video guides** — every exercise title is a clickable link
  (with a ▶ icon) that opens a video/technique guide in a new tab — mostly
  Muscle & Strength's exercise library, with a YouTube search fallback for
  machine-specific movements. Custom exercises link to whatever URL you
  provide. These links also appear in History and Calendar session details.
  Tap the **✏️** next to any exercise title to replace its video link with
  your own — useful if the default link isn't quite right. Your link is
  saved and reused every time that exercise appears, with a "Reset to
  default" option to revert.
- **📖 Tips & Guide** — a floating button in the bottom-right corner on
  every screen opens a reference panel covering: exercise order (compounds
  before isolation, abs last), weight progression (pyramid down / heavy to
  light), alternative exercises for dizziness-prone movements with the
  medical note about seeing a GP, the weekly walk/rest rhythm, and
  nutrition guidance for recomposition.
- **Calendar** — monthly view of every training day. Completed sessions are
  colour-coded by day type (A/B/C/D), missed training days are flagged in
  red, and tapping any date shows that session's full details.
- **History** — browse past sessions per day with all logged weights and notes.
- **Progress** — four views:
  - **By Exercise** — max weight and volume charts per exercise (including
    custom ones, marked with ⭐), plus a personal bests leaderboard.
  - **Weekly** — sessions completed, training volume, and total sets per
    week, with a week-by-week breakdown (target: 4 sessions/week).
  - **Monthly** — the same trends aggregated by calendar month.
  - **Body Weight** — your weight trend with Daily / Weekly / Monthly views,
    current vs starting weight, and a log of recent entries.

## Custom exercises and body weight — Supabase tables

If you're using Supabase sync, `setup.sql` now also creates:
- `body_weight_logs` — one row per day, your logged weight
- `custom_plan_exercises` — exercises you've chosen to "always include" on a
  given day, including an optional `video_url`
- `exercise_video_overrides` — your custom video links per exercise name

If you already ran an earlier version of `setup.sql`, just re-run the whole
file again in the SQL Editor — the `create table if not exists` and
`alter table ... add column if not exists` statements are safe to re-run and
won't affect your existing data.

## Updating the app later

If you ask Claude to make changes, re-upload the updated files to your
GitHub repo. Your `config.js` and existing workout data are unaffected.
