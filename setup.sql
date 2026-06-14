-- ============================================================
-- Lean Mass Tracker — Supabase setup
-- Run this once in your Supabase project's SQL Editor
-- (Dashboard → SQL Editor → New query → paste → Run)
-- ============================================================

create table if not exists workout_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) not null default auth.uid(),
  day_key text not null,
  date date not null,
  sets jsonb not null,
  note text default '',
  started_at bigint,
  finished_at bigint,
  created_at timestamptz default now()
);

-- Row Level Security: each user can only see/edit their own data
alter table workout_sessions enable row level security;

create policy "Users can view own sessions"
  on workout_sessions for select
  using (auth.uid() = user_id);

create policy "Users can insert own sessions"
  on workout_sessions for insert
  with check (auth.uid() = user_id);

create policy "Users can update own sessions"
  on workout_sessions for update
  using (auth.uid() = user_id);

create policy "Users can delete own sessions"
  on workout_sessions for delete
  using (auth.uid() = user_id);

-- Helpful index for ordering
create index if not exists workout_sessions_user_created_idx
  on workout_sessions (user_id, created_at);

-- ============================================================
-- Body weight log — one entry per user per date
-- ============================================================
create table if not exists body_weight_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) not null default auth.uid(),
  date date not null,
  weight numeric not null,
  created_at timestamptz default now(),
  unique (user_id, date)
);

alter table body_weight_logs enable row level security;

create policy "Users can view own weight logs"
  on body_weight_logs for select
  using (auth.uid() = user_id);

create policy "Users can upsert own weight logs"
  on body_weight_logs for insert
  with check (auth.uid() = user_id);

create policy "Users can update own weight logs"
  on body_weight_logs for update
  using (auth.uid() = user_id);

create policy "Users can delete own weight logs"
  on body_weight_logs for delete
  using (auth.uid() = user_id);

-- ============================================================
-- Custom exercises remembered per day (e.g. "always include
-- Cable Pec Fly on Day A")
-- ============================================================
create table if not exists custom_plan_exercises (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) not null default auth.uid(),
  day_key text not null,
  name text not null,
  sets integer not null default 3,
  reps text not null default '10',
  video_url text,
  created_at timestamptz default now(),
  unique (user_id, day_key, name)
);

-- If you ran an earlier version of this file before video links were added,
-- this adds the missing column without affecting existing rows:
alter table custom_plan_exercises add column if not exists video_url text;

-- ============================================================
-- Per-exercise video guide link overrides (e.g. "the squat link
-- was wrong, here's the one I actually want")
-- ============================================================
create table if not exists exercise_video_overrides (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) not null default auth.uid(),
  exercise_name text not null,
  video_url text not null,
  created_at timestamptz default now(),
  unique (user_id, exercise_name)
);

alter table exercise_video_overrides enable row level security;

create policy "Users can view own video overrides"
  on exercise_video_overrides for select
  using (auth.uid() = user_id);

create policy "Users can insert own video overrides"
  on exercise_video_overrides for insert
  with check (auth.uid() = user_id);

create policy "Users can update own video overrides"
  on exercise_video_overrides for update
  using (auth.uid() = user_id);

create policy "Users can delete own video overrides"
  on exercise_video_overrides for delete
  using (auth.uid() = user_id);

alter table custom_plan_exercises enable row level security;

create policy "Users can view own custom exercises"
  on custom_plan_exercises for select
  using (auth.uid() = user_id);

create policy "Users can insert own custom exercises"
  on custom_plan_exercises for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own custom exercises"
  on custom_plan_exercises for delete
  using (auth.uid() = user_id);
