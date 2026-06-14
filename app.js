/* ============================================================
   Lean Mass Tracker — Vanilla JS PWA
   ============================================================ */

// ── Plan data ────────────────────────────────────────────────
const PLAN = {
  A: {
    label: "Day A", focus: "Push Dominant", accent: "#3B82F6",
    note: "Lead with heavy compound push, support with pull and hinge.",
    exercises: [
      { name: "Squat",                 sets: 4, reps: "10", muscles: "Quads · Glutes",          type: "compound",  video: "https://www.muscleandstrength.com/exercises/squat.html" },
      { name: "Bench Press",           sets: 4, reps: "10", muscles: "Chest",                   type: "compound",  video: "https://www.muscleandstrength.com/exercises/barbell-bench-press.html" },
      { name: "Barbell Row",           sets: 3, reps: "12", muscles: "Back",                    type: "compound",  video: "https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html" },
      { name: "Seated Military Press", sets: 3, reps: "10", muscles: "Shoulders",               type: "compound",  video: "https://www.muscleandstrength.com/exercises/seated-military-press.html" },
      { name: "Barbell Bicep Curl",    sets: 3, reps: "10", muscles: "Biceps",                  type: "isolation", video: "https://www.muscleandstrength.com/exercises/barbell-curl.html" },
      { name: "Dips",                  sets: 3, reps: "10", muscles: "Triceps · Chest",         type: "compound",  video: "https://www.muscleandstrength.com/exercises/dips.html" },
      { name: "Leg Press Calf Raises", sets: 3, reps: "12", muscles: "Calves",                  type: "isolation", video: "https://www.muscleandstrength.com/exercises/leg-press-calf-raise.html",
        alt: { name: "Seated Calf Raise Machine", sets: 3, reps: "12", reason: "Seated position avoids blood pressure spike and dizziness risk" } },
      { name: "Hanging Leg Raises",    sets: 2, reps: "12", muscles: "Abs · Core",              type: "isolation", isAbs: true, video: "https://www.muscleandstrength.com/exercises/hanging-leg-raise.html" },
      { name: "Plank",                 sets: 2, reps: "45s", muscles: "Core · Stabilisers",     type: "isolation", isAbs: true, video: "https://www.muscleandstrength.com/exercises/plank.html" },
    ],
  },
  B: {
    label: "Day B", focus: "Pull Dominant", accent: "#10B981",
    note: "Hinge and pull emphasis. Lighter knee-dominant work supports recovery.",
    exercises: [
      { name: "Deadlift",               sets: 4, reps: "10", muscles: "Posterior Chain",          type: "compound",  video: "https://www.muscleandstrength.com/exercises/deadlift.html" },
      { name: "Incline Bench Press",    sets: 3, reps: "12", muscles: "Upper Chest",              type: "compound",  video: "https://www.muscleandstrength.com/exercises/incline-barbell-bench-press.html" },
      { name: "Lat Pulldown",           sets: 4, reps: "8",  muscles: "Lats",                    type: "compound",  video: "https://www.muscleandstrength.com/exercises/lat-pulldown.html" },
      { name: "Lateral Raise",          sets: 3, reps: "12", muscles: "Side Delts",              type: "isolation", video: "https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise.html" },
      { name: "Leg Curl",               sets: 3, reps: "12", muscles: "Hamstrings",              type: "isolation", video: "https://www.muscleandstrength.com/exercises/lying-leg-curls.html",
        alt: { name: "Lying Leg Curl Machine", sets: 3, reps: "12", reason: "Horizontal position eliminates dizziness risk entirely — best option if you experience lightheadedness" } },
      { name: "Rope Cable Hammer Curl", sets: 3, reps: "12", muscles: "Biceps · Brachialis",     type: "isolation", video: "https://www.youtube.com/results?search_query=Rope+Cable+Hammer+Curl+exercise+tutorial" },
      { name: "Seated French Press",    sets: 3, reps: "12", muscles: "Triceps",                 type: "isolation", video: "https://www.youtube.com/results?search_query=Seated+Overhead+Tricep+Extension+exercise+tutorial" },
    ],
  },
  C: {
    label: "Day C", focus: "Push Dominant", accent: "#8B5CF6",
    note: "Variation of Day A. Different angles for a second weekly stimulus per muscle.",
    exercises: [
      { name: "Machine Hack Squat",          sets: 3, reps: "12", muscles: "Quads",                      type: "compound",  video: "https://www.youtube.com/results?search_query=Machine+Hack+Squat+exercise+tutorial" },
      { name: "Hammer Strength Chest Press", sets: 3, reps: "8",  muscles: "Chest",                      type: "compound",  video: "https://www.muscleandstrength.com/exercises/hammer-strength-bench-press.html" },
      { name: "Cable Row",                   sets: 3, reps: "12", muscles: "Mid Back",                   type: "compound",  video: "https://www.muscleandstrength.com/exercises/seated-cable-rows.html" },
      { name: "Front Raise",                 sets: 3, reps: "12", muscles: "Front Delts",                type: "isolation", video: "https://www.muscleandstrength.com/exercises/dumbbell-front-raise.html" },
      { name: "Face Pulls",                  sets: 3, reps: "15", muscles: "Rear Delts · Rotator Cuff",  type: "isolation", video: "https://www.muscleandstrength.com/exercises/cable-face-pull" },
      { name: "Preacher Curl",               sets: 3, reps: "10", muscles: "Biceps",                    type: "isolation", video: "https://www.muscleandstrength.com/exercises/preacher-curl.html" },
      { name: "Seated Calf Raises",          sets: 3, reps: "12", muscles: "Soleus",                    type: "isolation", video: "https://www.muscleandstrength.com/exercises/seated-calf-raise.html" },
      { name: "Cable Crunch",                sets: 2, reps: "15", muscles: "Abs",                       type: "isolation", isAbs: true, video: "https://www.muscleandstrength.com/exercises/cable-crunch.html" },
      { name: "Hanging Leg Raises",          sets: 2, reps: "12", muscles: "Abs · Hip Flexors",          type: "isolation", isAbs: true, video: "https://www.muscleandstrength.com/exercises/hanging-leg-raise.html" },
    ],
  },
  D: {
    label: "Day D", focus: "Pull Dominant", accent: "#F59E0B",
    note: "Variation of Day B. Higher rep finishers to chase definition and pump.",
    exercises: [
      { name: "Stiff Legged Deadlift", sets: 4, reps: "10", muscles: "Hamstrings · Glutes",   type: "compound",  video: "https://www.muscleandstrength.com/exercises/stiff-legged-deadlift.html",
        alt: { name: "Lying Leg Curl Machine", sets: 3, reps: "12", reason: "Same hamstring stimulus with zero blood pressure spike. Use this until cleared by GP." } },
      { name: "Pull Up",               sets: 3, reps: "10", muscles: "Lats · Biceps",          type: "compound",  video: "https://www.muscleandstrength.com/exercises/pull-up.html" },
      { name: "Dumbbell Lunge",        sets: 3, reps: "8",  muscles: "Quads · Glutes",         type: "compound",  video: "https://www.muscleandstrength.com/exercises/dumbbell-lunge.html" },
      { name: "Hyperextension",        sets: 3, reps: "12", muscles: "Lower Back · Glutes",    type: "isolation", video: "https://www.muscleandstrength.com/exercises/hyperextension.html" },
      { name: "Cable Crossover",       sets: 3, reps: "12", muscles: "Chest",                  type: "isolation", video: "https://www.muscleandstrength.com/exercises/cable-crossover.html" },
      { name: "Barbell Shrugs",        sets: 4, reps: "12", muscles: "Traps",                  type: "isolation", video: "https://www.muscleandstrength.com/exercises/barbell-shrug.html" },
      { name: "Reverse Pec Deck",      sets: 3, reps: "12", muscles: "Rear Delts",             type: "isolation", video: "https://www.youtube.com/results?search_query=Reverse+Pec+Deck+Rear+Delt+Fly+exercise+tutorial" },
    ],
  },
};

const DAYS = ["A", "B", "C", "D"];
const SCHEDULE = { Mon: "A", Tue: "B", Wed: null, Thu: "C", Fri: "D", Sat: null, Sun: null };
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const C_MUTED = "#6B7280", C_FAINT = "#374151", C_GREEN = "#10B981", C_RED = "#EF4444", C_TEXT = "#F9FAFB";

// ── Theme management ─────────────────────────────────────────────
const THEME_KEY = "leanMassTrackerTheme";
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch(e) {}
}
applyTheme(localStorage.getItem(THEME_KEY) || "dark");
function getTheme() { return document.documentElement.getAttribute("data-theme") || "dark"; }

// ── Session draft (persist in-progress session across reloads) ───
const SESSION_DRAFT_KEY = "leanMassTrackerSessionDraft";
function saveSessionDraft() {
  if (!state || !state.session) return;
  try { localStorage.setItem(SESSION_DRAFT_KEY, JSON.stringify(state.session)); } catch(e) {}
}
function clearSessionDraft() { localStorage.removeItem(SESSION_DRAFT_KEY); }
function loadSessionDraft() {
  try {
    const raw = localStorage.getItem(SESSION_DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

// Quick video search link for any exercise name (used for custom exercises
// and as a fallback when a specific guide page isn't known)
function youtubeSearch(name) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(name + " exercise tutorial")}`;
}

// Flat lookup of exercise name -> video guide URL, built from PLAN
const VIDEO_GUIDES = {};
Object.values(PLAN).forEach(day => day.exercises.forEach(ex => {
  if (ex.video) VIDEO_GUIDES[ex.name] = ex.video;
}));

// Look up a video guide URL for any exercise (plan, remembered custom, or
// one logged in a past session)
function getVideoUrl(exName, dayKey, session) {
  const override = state.data.videoOverrides && state.data.videoOverrides[exName];
  if (override) return override;
  if (VIDEO_GUIDES[exName]) return VIDEO_GUIDES[exName];
  if (session && session.customExercises) {
    const fromSession = session.customExercises.find(e => e.name === exName);
    if (fromSession && fromSession.videoUrl) return fromSession.videoUrl;
  }
  if (dayKey && state.data.customPlanExercises && state.data.customPlanExercises[dayKey]) {
    const remembered = state.data.customPlanExercises[dayKey].find(e => e.name === exName);
    if (remembered && remembered.videoUrl) return remembered.videoUrl;
  }
  return null;
}

// ── Date helpers ─────────────────────────────────────────────
// Always use local calendar date — never toISOString() which converts to UTC
// and causes off-by-one errors for timezones east of UTC (e.g. IST UTC+5:30)
const fmtDate = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};
const todayStr = () => fmtDate(new Date());
const todayDayKey = () => {
  const d = WEEKDAYS[(new Date().getDay() + 6) % 7]; // getDay: 0=Sun -> map to Mon..Sun
  return SCHEDULE[d] || null;
};
function getMonday(d) {
  const date = new Date(d);
  const day = (date.getDay() + 6) % 7; // 0 = Monday
  date.setDate(date.getDate() - day);
  return date;
}
function weekRangeLabel(monday) {
  const sunday = new Date(monday);
  sunday.setDate(sunday.getDate() + 6);
  const fmt = (d) => `${d.getDate()} ${d.toLocaleString("default", { month: "short" })}`;
  return `${fmt(monday)} – ${fmt(sunday)}`;
}
function monthLabel(monthKey) {
  const [y, m] = monthKey.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleString("default", { month: "long", year: "numeric" });
}

// ── Aggregate sessions by week or month ───────────────────────
function aggregateSessions(period) {
  const sessions = state.data.sessions.slice().sort((a, b) => a.date.localeCompare(b.date));
  const map = {};
  sessions.forEach(sess => {
    const key = period === "week"
      ? fmtDate(getMonday(new Date(sess.date)))
      : sess.date.slice(0, 7);
    if (!map[key]) map[key] = { sessions: 0, volume: 0, sets: 0 };
    map[key].sessions += 1;
    Object.values(sess.sets).flat().forEach(set => {
      if (set.done) {
        map[key].sets += 1;
        map[key].volume += (parseFloat(set.weight) || 0) * (parseInt(set.reps) || 0);
      }
    });
  });
  return Object.keys(map).sort().map(key => ({
    key,
    label: period === "week" ? weekRangeLabel(new Date(key)) : monthLabel(key),
    shortLabel: period === "week"
      ? new Date(key).toLocaleString("default", { day: "numeric", month: "short" })
      : new Date(key + "-01").toLocaleString("default", { month: "short" }),
    sessions: map[key].sessions,
    volume: Math.round(map[key].volume),
    sets: map[key].sets,
  }));
}

// ── Body weight helpers ────────────────────────────────────────
function getLatestBodyWeight() {
  const entries = state.data.bodyWeights || [];
  if (entries.length === 0) return null;
  return entries.slice().sort((a, b) => a.date.localeCompare(b.date)).pop();
}

function getBodyWeightForDate(date) {
  return (state.data.bodyWeights || []).find(e => e.date === date);
}

async function logBodyWeight(weight) {
  const date = todayStr();
  const w = Math.round(parseFloat(weight) * 10) / 10;
  if (!w || w <= 0 || w > 500) return false;

  const entries = state.data.bodyWeights || [];
  const existingIdx = entries.findIndex(e => e.date === date);
  if (existingIdx >= 0) entries[existingIdx] = { date, weight: w };
  else entries.push({ date, weight: w });
  entries.sort((a, b) => a.date.localeCompare(b.date));
  state.data.bodyWeights = entries;
  saveLocalData(state.data);

  if (supabaseClient && state.user) {
    const ok = await pushBodyWeightToSupabase({ date, weight: w });
    if (!ok) queuePendingSync({ kind: "weight", data: { date, weight: w } });
  }
  return true;
}

// Set (or clear, with videoUrl = null) a video guide override for an exercise
async function setVideoOverride(exerciseName, videoUrl) {
  state.data.videoOverrides = state.data.videoOverrides || {};
  if (videoUrl === null) {
    delete state.data.videoOverrides[exerciseName];
  } else {
    state.data.videoOverrides[exerciseName] = videoUrl;
  }
  saveLocalData(state.data);

  if (supabaseClient && state.user) {
    const ok = await pushVideoOverrideToSupabase(exerciseName, videoUrl);
    if (!ok) queuePendingSync({ kind: "videoOverride", exerciseName, videoUrl });
  }
}

// Aggregate body weight entries for daily / weekly / monthly views
function aggregateBodyWeight(period) {
  const entries = (state.data.bodyWeights || []).slice().sort((a, b) => a.date.localeCompare(b.date));

  if (period === "daily") {
    return entries.map(e => ({ date: e.date.slice(5), weight: e.weight, fullDate: e.date }));
  }

  const map = {};
  entries.forEach(e => {
    const key = period === "weekly"
      ? fmtDate(getMonday(new Date(e.date)))
      : e.date.slice(0, 7);
    if (!map[key]) map[key] = { sum: 0, count: 0, min: e.weight, max: e.weight };
    map[key].sum += e.weight;
    map[key].count += 1;
    map[key].min = Math.min(map[key].min, e.weight);
    map[key].max = Math.max(map[key].max, e.weight);
  });
  return Object.keys(map).sort().map(key => ({
    key,
    label: period === "weekly" ? weekRangeLabel(new Date(key)) : monthLabel(key),
    date: period === "weekly"
      ? new Date(key).toLocaleString("default", { day: "numeric", month: "short" })
      : new Date(key + "-01").toLocaleString("default", { month: "short" }),
    weight: Math.round((map[key].sum / map[key].count) * 10) / 10,
    min: map[key].min,
    max: map[key].max,
  }));
}

// ── Storage (local cache) ────────────────────────────────────
const STORAGE_KEY = "leanMassTrackerV1";
const EMPTY_DATA = { sessions: [], bodyWeights: [], customPlanExercises: {}, videoOverrides: {}, pendingSync: [] };
function loadLocalData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...EMPTY_DATA, ...JSON.parse(raw) } : { ...EMPTY_DATA };
  } catch (e) { return { ...EMPTY_DATA }; }
}
function saveLocalData(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
}

// ── Supabase (cloud sync) ─────────────────────────────────────
const SUPABASE_CONFIGURED =
  typeof SUPABASE_URL !== "undefined" &&
  SUPABASE_URL && SUPABASE_ANON_KEY &&
  !SUPABASE_URL.includes("YOUR-PROJECT");

const supabaseClient = SUPABASE_CONFIGURED
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

function rowToSession(row) {
  return {
    id: row.id,
    dayKey: row.day_key,
    date: row.date,
    sets: row.sets,
    note: row.note || "",
    startedAt: row.started_at,
    finishedAt: row.finished_at,
  };
}

async function syncFromSupabase() {
  if (!supabaseClient || !state.user) return;

  const [sessionsRes, weightsRes, customExRes, overridesRes] = await Promise.all([
    supabaseClient.from("workout_sessions").select("*").order("created_at", { ascending: true }),
    supabaseClient.from("body_weight_logs").select("*").order("date", { ascending: true }),
    supabaseClient.from("custom_plan_exercises").select("*"),
    supabaseClient.from("exercise_video_overrides").select("*"),
  ]);

  if (!sessionsRes.error && sessionsRes.data) {
    state.data.sessions = sessionsRes.data.map(rowToSession);
  }
  if (!weightsRes.error && weightsRes.data) {
    state.data.bodyWeights = weightsRes.data.map(r => ({ date: r.date, weight: r.weight }));
  }
  if (!customExRes.error && customExRes.data) {
    const byDay = {};
    customExRes.data.forEach(r => {
      if (!byDay[r.day_key]) byDay[r.day_key] = [];
      const ex = { name: r.name, sets: r.sets, reps: r.reps };
      if (r.video_url) ex.videoUrl = r.video_url;
      byDay[r.day_key].push(ex);
    });
    state.data.customPlanExercises = byDay;
  }
  if (!overridesRes.error && overridesRes.data) {
    const overrides = {};
    overridesRes.data.forEach(r => { overrides[r.exercise_name] = r.video_url; });
    state.data.videoOverrides = overrides;
  }
  saveLocalData(state.data);
}

// ── Push helpers (each returns true on success) ────────────────
async function pushSessionToSupabase(session) {
  if (!supabaseClient || !state.user) return false;
  try {
    const { error } = await supabaseClient.from("workout_sessions").insert({
      user_id: state.user.id,
      day_key: session.dayKey,
      date: session.date,
      sets: session.sets,
      note: session.note,
      started_at: session.startedAt,
      finished_at: session.finishedAt,
    });
    return !error;
  } catch (e) {
    return false; // network error, offline, etc.
  }
}

async function pushBodyWeightToSupabase(entry) {
  if (!supabaseClient || !state.user) return false;
  try {
    const { error } = await supabaseClient.from("body_weight_logs").upsert({
      user_id: state.user.id,
      date: entry.date,
      weight: entry.weight,
    }, { onConflict: "user_id,date" });
    return !error;
  } catch (e) {
    return false;
  }
}

async function pushCustomPlanExerciseToSupabase(dayKey, ex) {
  if (!supabaseClient || !state.user) return false;
  try {
    const { error } = await supabaseClient.from("custom_plan_exercises").upsert({
      user_id: state.user.id,
      day_key: dayKey,
      name: ex.name,
      sets: ex.sets,
      reps: ex.reps,
      video_url: ex.videoUrl || null,
    }, { onConflict: "user_id,day_key,name" });
    return !error;
  } catch (e) {
    return false;
  }
}

async function pushVideoOverrideToSupabase(exerciseName, videoUrl) {
  if (!supabaseClient || !state.user) return false;
  try {
    if (videoUrl === null) {
      const { error } = await supabaseClient.from("exercise_video_overrides")
        .delete()
        .eq("user_id", state.user.id)
        .eq("exercise_name", exerciseName);
      return !error;
    }
    const { error } = await supabaseClient.from("exercise_video_overrides").upsert({
      user_id: state.user.id,
      exercise_name: exerciseName,
      video_url: videoUrl,
    }, { onConflict: "user_id,exercise_name" });
    return !error;
  } catch (e) {
    return false;
  }
}

// ── Pending sync queue (offline-safe retry) ───────────────────
// Each item: { kind: "session" | "weight" | "customExercise", data, dayKey? }
function queuePendingSync(item) {
  if (!state.data.pendingSync) state.data.pendingSync = [];
  state.data.pendingSync.push(item);
  saveLocalData(state.data);
}

let syncInProgress = false;
async function syncPendingItems() {
  if (!supabaseClient || !state.user) return;
  if (syncInProgress) return;
  if (!state.data.pendingSync || state.data.pendingSync.length === 0) return;

  syncInProgress = true;
  try {
    const remaining = [];
    for (const item of state.data.pendingSync) {
      let ok = false;
      if (item.kind === "session") ok = await pushSessionToSupabase(item.data);
      else if (item.kind === "weight") ok = await pushBodyWeightToSupabase(item.data);
      else if (item.kind === "customExercise") ok = await pushCustomPlanExerciseToSupabase(item.dayKey, item.data);
      else if (item.kind === "videoOverride") ok = await pushVideoOverrideToSupabase(item.exerciseName, item.videoUrl);
      if (!ok) remaining.push(item);
    }
    const synced = state.data.pendingSync.length - remaining.length;
    state.data.pendingSync = remaining;
    saveLocalData(state.data);
    if (synced > 0 && (state.screen === "home" || state.screen === "progress")) render();
  } finally {
    syncInProgress = false;
  }
}

// ── State ────────────────────────────────────────────────────
let state = {
  screen: "loading",
  data: { ...EMPTY_DATA },
  session: null,
  currentEx: 0,
  showAddExercise: false,
  showWeightInput: false,
  showGuide: false,
  showVideoEdit: false,
  showUserMenu: false,
  showAlt: false,
  confirmModal: null,   // { icon, title, message, yesLabel, yesAction, danger }
  historyDay: "A",
  progressDay: "A",
  progressEx: "Squat",
  progressView: "exercise", // exercise | weekly | monthly | weight
  weightView: "daily", // daily | weekly | monthly
  calendarMonth: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  calendarSelected: null,
  user: null,
  authStatus: SUPABASE_CONFIGURED ? "loading" : "local",
};

// ── Utility ──────────────────────────────────────────────────
function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}
function hexA(hex, alpha) {
  // returns hex + alpha suffix like #3B82F620
  return hex + alpha;
}
function badge(label, color, bg) {
  return `<span class="badge" style="color:${color};background:${bg}">${esc(label)}</span>`;
}
function btn({ label, onclick, color = "#3B82F6", outline = false, small = false, full = false, disabled = false, extraStyle = "" }) {
  const cls = ["btn", outline ? "outline" : "", small ? "small" : "", full ? "full" : ""].filter(Boolean).join(" ");
  const style = `border-color:${color};${outline ? `color:${color};background:transparent;` : `background:${color};color:white;`}${extraStyle}`;
  return `<button class="${cls}" style="${style}" ${disabled ? "disabled" : ""} ${onclick ? `data-action="${onclick}"` : ""}>${label}</button>`;
}

// ── Render dispatcher ────────────────────────────────────────
// ── Guide / Tips overlay — accessible from every screen ────────
function renderGuideOverlay() {
  const Section = (icon, title, color, bodyHtml) => `
    <div class="guide-section">
      <div class="guide-section-head">
        <span style="font-size:18px">${icon}</span>
        <h3 style="margin:0;font-size:14px;font-weight:800;color:${color}">${title}</h3>
      </div>
      <div class="guide-section-body">${bodyHtml}</div>
    </div>`;

  const content = `
    ${Section("🔢", "Exercise Order", "#3B82F6", `
      <p>Two firm rules — everything else is flexible:</p>
      <ul>
        <li><strong>Compounds before isolation.</strong> Big multi-joint lifts (squat, bench, deadlift, row) need full freshness — don't pre-fatigue the muscles they rely on.</li>
        <li><strong>Abs always last.</strong> Core fatigue affects every other lift, so the abs finisher comes after everything else.</li>
      </ul>
      <p>Within those bookends, swap exercise order freely — e.g. if equipment is busy.</p>
    `)}

    ${Section("📉", "Weight Progression", "#10B981", `
      <p><strong>Heavy to light (pyramid down)</strong> across your sets — this is the right approach for a sculpted, lean physique.</p>
      <ul>
        <li>Set 1 (heaviest): last 2 reps should feel genuinely challenging with perfect form</li>
        <li>Each following set: drop the weight slightly, same rep target</li>
        <li>If Set 1 feels easy with 4+ reps left → go heavier next session</li>
        <li>If form breaks before the target reps → go lighter</li>
      </ul>
      <p>Give it ~2 weeks to calibrate — don't overthink the starting weight on day one.</p>
    `)}

    ${Section("🔄", "Alternative Exercises", "#F59E0B", `
      <p>If <strong>Stiff Legged Deadlift</strong> or <strong>Leg Press</strong> cause dizziness or lightheadedness:</p>
      <ul>
        <li><strong>Stiff Legged Deadlift</strong> → Lying Leg Curl Machine (3×12) — same hamstring stimulus, no blood pressure spike</li>
        <li><strong>Leg Curl</strong> → Lying Leg Curl Machine — horizontal position removes the dizziness risk entirely</li>
        <li><strong>Leg Press Calf Raises</strong> → Seated Calf Raise Machine — seated position avoids the spike</li>
      </ul>
      <div class="guide-warning">
        🏥 <strong>Actual fainting (not just dizziness) during exertion is not normal.</strong>
        See your GP before continuing these movements — mention "exercise-induced syncope".
        Don't train alone on these days, exhale on exertion (never hold your breath),
        and stay seated 60–90s after heavy sets.
      </div>
    `)}

    ${Section("🚶", "Weekly Rhythm", "#06B6D4", `
      <ul>
        <li><strong>After every training day (Mon/Tue/Thu/Fri):</strong> 10–15 min light walk, always after weights — never before</li>
        <li><strong>Wednesday:</strong> 30 min brisk walk (the only "harder" cardio of the week)</li>
        <li><strong>Sat/Sun:</strong> full rest — this is where muscle definition actually develops</li>
      </ul>
      <p>Don't add extra training days — frequency (2×/week per muscle via the A/B/C/D split) plus recovery beats more volume for a lean, sculpted look.</p>
    `)}

    ${Section("🍽️", "Nutrition for Recomposition", "#EC4899", `
      <p>At ~169cm / 72–74kg with fat concentrated around the midsection, a small deficit (recomposition) works better than a surplus:</p>
      <ul>
        <li><strong>1,800–1,900 kcal/day</strong> — lose fat while building/maintaining muscle</li>
        <li><strong>140–150g protein/day</strong> minimum</li>
        <li>Cut processed carbs and alcohol first — biggest impact on visceral/love-handle fat</li>
        <li>Sleep 7–9 hrs — this is when fat loss and muscle repair actually happen</li>
      </ul>
      <p>Timeline: visible upper-body tone in 3–4 weeks, midsection definition in 8–16 weeks depending on consistency.</p>
    `)}
  `;

  return `<div class="guide-overlay">
    <div class="guide-overlay-backdrop" data-action="toggleGuide"></div>
    <div class="guide-modal">
      <div class="guide-modal-head">
        <h2 style="margin:0;font-size:16px;font-weight:900">📖 Tips &amp; Guide</h2>
        <button data-action="toggleGuide" class="guide-close">×</button>
      </div>
      <div class="guide-modal-body">${content}</div>
    </div>
  </div>`;
}


function render() {
  const app = document.getElementById("app");
  let html = "";

  if (state.screen === "loading") html = renderLoading();
  else if (state.screen === "login") html = renderLogin();
  else if (state.screen === "home") html = renderHome();
  else if (state.screen === "session") html = renderSession();
  else if (state.screen === "calendar") html = renderCalendar();
  else if (state.screen === "history") html = renderHistory();
  else if (state.screen === "progress") html = renderProgress();

  if (["home", "calendar", "history", "progress"].includes(state.screen)) html += renderNav();

  // Guide FAB + overlay + user avatar — accessible from every screen except loading/login
  if (!["loading", "login"].includes(state.screen)) {
    const bottomOffset = ["home", "calendar", "history", "progress"].includes(state.screen) ? 94 : 20;
    html += `<button data-action="toggleGuide" class="guide-fab" style="bottom:${bottomOffset}px" title="Tips & Guide">📖</button>`;
    if (state.showGuide) html += renderGuideOverlay();
    html += renderUserAvatar();
    html += renderConfirmModal();
  }

  app.innerHTML = html;
  attachHandlers();
}

function renderLoading() {
  return `<div class="loading"><div class="loading-spinner"></div>Loading your tracker...</div>`;
}

// ── Custom confirm modal ─────────────────────────────────────────
function renderConfirmModal() {
  if (!state.confirmModal) return "";
  const { icon, title, message, yesLabel, noLabel, yesAction, danger } = state.confirmModal;
  const yesColor = danger ? "#EF4444" : C_GREEN;
  return `<div class="confirm-overlay" data-action="dismissModal">
    <div class="confirm-modal" data-action="noop">
      ${icon ? `<div class="confirm-icon">${icon}</div>` : ""}
      <p class="confirm-title">${esc(title)}</p>
      <p class="confirm-msg">${esc(message)}</p>
      <div class="confirm-actions">
        ${btn({ label: yesLabel || "Confirm", onclick: yesAction, color: yesColor, full: true })}
        ${btn({ label: noLabel || "Cancel", onclick: "dismissModal", color: C_MUTED, outline: true, full: true })}
      </div>
    </div>
  </div>`;
}

// ── User avatar button + dropdown menu ───────────────────────────
function renderUserAvatar() {
  const isLight = getTheme() === "light";

  let avatarContent, avatarClass;
  if (state.user) {
    const email = state.user.email || "";
    avatarContent = (email[0] || "U").toUpperCase();
    avatarClass = "user-avatar-btn";
  } else {
    avatarContent = "⚙";
    avatarClass = "user-avatar-btn local-mode";
  }

  let html = `<button class="${avatarClass}" data-action="toggleUserMenu" title="Account &amp; Settings">${avatarContent}</button>`;

  if (!state.showUserMenu) return html;

  const pendingCount = (state.data.pendingSync || []).length;

  html += `<div class="user-menu-overlay" data-action="closeUserMenu"></div>
  <div class="user-menu-panel">
    <div class="user-menu-header">`;

  if (state.user) {
    html += `<p class="user-menu-email">☁️ ${esc(state.user.email || "")}</p>
      <p class="user-menu-status"><span class="sync-dot"></span> Syncing to Supabase</p>`;
  } else {
    html += `<p class="user-menu-email">📱 Local Mode</p>
      <p class="user-menu-status">No cloud sync configured</p>`;
  }

  html += `</div>
    <div class="user-menu-body">
      <div class="user-menu-row">
        <span class="user-menu-row-label">☀️&nbsp; Light mode</span>
        <div class="toggle-switch ${isLight ? "on" : ""}" data-action="toggleTheme"><div class="toggle-knob"></div></div>
      </div>`;

  if (pendingCount > 0) {
    html += `<div class="user-menu-divider"></div>
      <button class="sync-badge-menu" data-action="retrySync">
        ⏳ ${pendingCount} pending sync${pendingCount > 1 ? "s" : ""} — tap to retry
      </button>`;
  }

  if (state.user) {
    html += `<div class="user-menu-divider"></div>
      <button class="user-menu-btn danger" data-action="signOut">🚪 Sign out</button>`;
  }

  html += `</div></div>`;
  return html;
}

function renderLogin() {
  return `<div class="page" style="padding-top:80px;text-align:center">
    <div style="font-size:48px;margin-bottom:12px">🏋️</div>
    <h1 class="h1" style="margin-bottom:6px">Lean Mass Tracker</h1>
    <p style="color:${C_MUTED};font-size:13px;margin-bottom:24px;line-height:1.6">
      Sign in to sync your workout history, body weight, and custom exercises across devices.
    </p>
    <button data-action="signInGoogle" class="google-signin-btn">
      <svg width="18" height="18" viewBox="0 0 48 48" style="flex-shrink:0">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
      </svg>
      <span>Continue with Google</span>
    </button>
    <p id="login-status" style="font-size:12px;color:${C_MUTED};margin-top:14px;line-height:1.6"></p>
  </div>`;
}

// ── Nav ──────────────────────────────────────────────────────
function renderNav() {
  const tabs = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "calendar", icon: "📅", label: "Calendar" },
    { id: "history", icon: "📋", label: "History" },
    { id: "progress", icon: "📈", label: "Progress" },
  ];
  return `<nav class="bottom-nav">
    <div class="nav-brand">
      <span class="nav-brand-icon">💪</span>
      <span class="nav-brand-name">Lean Mass</span>
    </div>
    ${tabs.map(t => `
      <button class="nav-btn ${state.screen === t.id ? "active" : ""}" data-action="nav:${t.id}">
        <span class="icon">${t.icon}</span>
        <span class="label">${t.label}</span>
      </button>
    `).join("")}
  </nav>`;
}

// ── HOME SCREEN ──────────────────────────────────────────────
// ── Body weight card (Home screen) ────────────────────────────
function renderBodyWeightCard() {
  const latest = getLatestBodyWeight();
  const todayEntry = getBodyWeightForDate(todayStr());
  const allEntries = (state.data.bodyWeights || []).slice().sort((a, b) => a.date.localeCompare(b.date));

  // 7-day trend
  let trendHtml = "";
  if (allEntries.length >= 2) {
    const weekAgoCutoff = new Date(Date.now() - 7 * 86400000);
    const weekAgoEntry = allEntries.filter(e => new Date(e.date) <= weekAgoCutoff).pop();
    if (weekAgoEntry && latest) {
      const diff = Math.round((latest.weight - weekAgoEntry.weight) * 10) / 10;
      const arrow = diff > 0 ? "▲" : diff < 0 ? "▼" : "—";
      const color = diff > 0 ? "#F59E0B" : diff < 0 ? C_GREEN : C_MUTED;
      trendHtml = `<span style="font-size:11px;color:${color};font-weight:700">${arrow} ${Math.abs(diff)}kg / 7d</span>`;
    }
  }

  let html = `<div class="day-card" style="flex-direction:column;align-items:stretch;gap:10px">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div>
        <div class="day-card-title" style="margin-bottom:0">
          <span style="font-size:16px">⚖️</span>
          <span class="day-card-name">Body Weight</span>
        </div>
        ${latest
          ? `<p class="day-card-meta">Latest: <strong style="color:${C_TEXT}">${latest.weight}kg</strong> on ${latest.date}${trendHtml ? " · " + trendHtml : ""}</p>`
          : `<p class="day-card-meta">No entries yet</p>`
        }
      </div>
      ${btn({ label: todayEntry ? "Update" : "Log Weight", onclick: "toggleWeightInput", color: "#3B82F6", small: true, outline: !!todayEntry })}
    </div>`;

  if (state.showWeightInput) {
    html += `<div style="display:flex;gap:8px;align-items:flex-end">
      <div style="flex:1">
        <p class="set-field-label">Today's weight (kg)</p>
        <input class="set-input" id="weight-input" type="number" inputmode="decimal" step="0.1"
          placeholder="e.g. 73.5" value="${todayEntry ? todayEntry.weight : ""}" />
      </div>
      ${btn({ label: "Save", onclick: "saveWeight", color: "#3B82F6" })}
    </div>
    <p id="weight-error" style="margin:0;font-size:11px;color:${C_RED}"></p>`;
  }

  html += `</div>`;
  return html;
}


function renderHome() {
  const data = state.data;
  const suggested = todayDayKey();
  const totalSessions = data.sessions.length;
  const now = new Date();
  const weekAgo = new Date(now - 7 * 86400000);
  const weekSessions = data.sessions.filter(s => new Date(s.date) >= weekAgo).length;

  let html = `<div class="page">
    <div style="padding-right:52px">
      <p class="eyebrow">Your 6-Week Plan</p>
      <h1 class="h1">Lean Mass Tracker</h1>
    </div>

    <div class="stats-row" style="margin-top:22px">
      <div class="stat-card"><p class="stat-value">${totalSessions}</p><p class="stat-label">Total Sessions</p></div>
      <div class="stat-card"><p class="stat-value">${weekSessions}</p><p class="stat-label">This Week</p></div>
      <div class="stat-card"><p class="stat-value">${weekSessions}/4</p><p class="stat-label">Streak</p></div>
    </div>`;

  if (suggested) {
    const day = PLAN[suggested];
    html += `<div class="today-card" style="background:${hexA(day.accent,"18")};border-color:${hexA(day.accent,"44")}">
      <div class="today-card-head">
        <div>
          <p class="eyebrow" style="color:${day.accent}">Today's Session</p>
          <p style="margin:2px 0 0;font-size:18px;font-weight:800">${day.label} — ${day.focus}</p>
        </div>
        <span style="font-size:28px">💪</span>
      </div>
      ${btn({ label: `Start ${day.label}`, onclick: `start:${suggested}`, color: day.accent, full: true })}
    </div>`;
  } else {
    html += `<div class="today-card" style="background:${hexA("#10B981","18")};border-color:${hexA("#10B981","44")}">
      <div class="today-card-head">
        <div>
          <p class="eyebrow" style="color:#10B981">Today</p>
          <p style="margin:2px 0 0;font-size:18px;font-weight:800">Rest Day 🌿</p>
          <p style="margin:4px 0 0;font-size:12px;color:${C_MUTED}">${todayDayKeyLabel()}</p>
        </div>
        <span style="font-size:28px">🚶</span>
      </div>
    </div>`;
  }

  html += renderBodyWeightCard();

  html += `<p class="section-label">All Days</p>`;
  DAYS.forEach(key => {
    const day = PLAN[key];
    const daySessions = data.sessions.filter(s => s.dayKey === key);
    const last = daySessions[daySessions.length - 1];
    html += `<div class="day-card">
      <div>
        <div class="day-card-title">
          <div class="dot" style="background:${day.accent}"></div>
          <span class="day-card-name">${day.label}</span>
          ${badge(day.focus, day.accent, hexA(day.accent,"20"))}
        </div>
        <p class="day-card-meta">${daySessions.length} sessions · ${day.exercises.length} exercises${last ? ` · Last: ${last.date}` : ""}</p>
      </div>
      ${btn({ label: "Start", onclick: `start:${key}`, color: day.accent, small: true, outline: true })}
    </div>`;
  });

  html += `<p class="section-label">Weekly Schedule</p>
    <div class="week-grid">`;
  const todayWeekday = WEEKDAYS[(new Date().getDay() + 6) % 7];
  WEEKDAYS.forEach(d => {
    const dk = SCHEDULE[d];
    const isToday = d === todayWeekday;
    const bg = isToday ? (dk ? PLAN[dk].accent : C_FAINT) : (dk ? hexA(PLAN[dk].accent,"20") : "#111827");
    const wdColor = isToday ? "white" : (dk ? PLAN[dk].accent : C_MUTED);
    const wsColor = isToday ? "rgba(255,255,255,0.8)" : C_MUTED;
    const label = dk ? `Day ${dk}` : (d === "Wed" ? "Walk" : "Rest");
    html += `<div class="week-cell" style="background:${bg}">
      <p class="wd" style="color:${wdColor}">${d}</p>
      <p class="ws" style="color:${wsColor}">${label}</p>
    </div>`;
  });
  html += `</div></div>`;

  return html;
}

function todayDayKeyLabel() {
  const todayWeekday = WEEKDAYS[(new Date().getDay() + 6) % 7];
  return todayWeekday === "Wed" ? "30 min brisk walk today" : "Full rest — recover well";
}

function renderAccountBadge() {
  if (!SUPABASE_CONFIGURED) {
    return `<span style="font-size:10px;color:${C_MUTED};border:1px solid ${C_FAINT};border-radius:8px;padding:4px 8px">Local only</span>`;
  }
  if (!state.user) return "";
  const email = state.user.email || "";
  const pending = (state.data.pendingSync || []).length;
  const pendingBadge = pending > 0
    ? `<button data-action="retrySync" style="background:none;border:1px solid #F59E0B;border-radius:8px;
        padding:4px 8px;color:#F59E0B;font-size:10px;cursor:pointer;margin-bottom:4px;display:block;width:100%"
        title="Tap to retry now">
        ⏳ ${pending} pending sync
      </button>`
    : "";
  return `<div style="text-align:right">
    ${pendingBadge}
    <button data-action="signOut" style="background:none;border:1px solid ${C_FAINT};border-radius:8px;
      padding:4px 8px;color:${C_MUTED};font-size:10px;cursor:pointer;max-width:120px;
      overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(email)} — tap to sign out">
      ☁️ ${esc(email.split("@")[0])}
    </button>
  </div>`;
}

// ── SESSION SCREEN ───────────────────────────────────────────
function startSession(dayKey) {
  clearSessionDraft();
  const day = PLAN[dayKey];
  const sets = {};
  day.exercises.forEach(ex => {
    sets[ex.name] = Array.from({ length: ex.sets }, () => ({ weight: "", reps: "", done: false }));
  });

  // Seed any exercises remembered for this day ("always include")
  const remembered = (state.data.customPlanExercises && state.data.customPlanExercises[dayKey]) || [];
  const customExercises = remembered.map(ex => ({ ...ex }));
  customExercises.forEach(ex => {
    sets[ex.name] = Array.from({ length: ex.sets }, () => ({ weight: "", reps: "", done: false }));
  });

  state.session = { dayKey, date: todayStr(), sets, note: "", startedAt: Date.now(), customExercises };
  state.currentEx = 0;
  state.showAddExercise = false;
  state.showVideoEdit = false;
  state.screen = "session";
  render();
}

// All exercises for the current session: plan exercises (with swaps applied) + custom
function getSessionExercises(session) {
  const swaps = session.swappedExercises || {};
  const planExs = PLAN[session.dayKey].exercises.map(ex => {
    const swap = swaps[ex.name];
    if (swap) {
      return { ...ex, name: swap.altName, sets: swap.altSets, reps: swap.altReps, _swappedFrom: ex.name };
    }
    return ex;
  });
  return [...planExs, ...(session.customExercises || [])];
}

// All exercise names ever logged or remembered for a given day — used for Progress exercise picker
function getAllExerciseNames(dayKey) {
  const planNames = PLAN[dayKey].exercises.map(e => e.name);
  const customNames = [];
  const remembered = (state.data.customPlanExercises && state.data.customPlanExercises[dayKey]) || [];
  remembered.forEach(ex => { if (!customNames.includes(ex.name)) customNames.push(ex.name); });
  state.data.sessions.forEach(sess => {
    if (sess.dayKey !== dayKey) return;
    Object.keys(sess.sets).forEach(name => {
      if (!planNames.includes(name) && !customNames.includes(name)) customNames.push(name);
    });
  });
  return { planNames, customNames, all: [...planNames, ...customNames] };
}

async function finishSession() {
  if (!state.session) return;
  const finished = { ...state.session, finishedAt: Date.now() };
  state.data.sessions.push(finished);
  saveLocalData(state.data);
  state.session = null;
  clearSessionDraft();
  state.screen = "home";
  render();

  // Push to cloud in the background — doesn't block the UI
  if (supabaseClient && state.user) {
    const ok = await pushSessionToSupabase(finished);
    if (!ok) {
      queuePendingSync({ kind: "session", data: finished });
      if (state.screen === "home") render(); // update pending-sync badge
    }
  }
}

function renderSession() {
  const session = state.session;
  const day = PLAN[session.dayKey];
  const exercises = getSessionExercises(session);
  const ex = exercises[state.currentEx];
  const isFirst = state.currentEx === 0;
  const isLast = state.currentEx === exercises.length - 1;

  const allSets = Object.values(session.sets).flat();
  const completedSets = allSets.filter(s => s.done).length;
  const totalSets = allSets.length;
  const progress = totalSets > 0 ? (completedSets / totalSets) * 100 : 0;
  const completedExercises = exercises.filter(e => {
    const s = session.sets[e.name] || [];
    return s.length > 0 && s.every(x => x.done);
  }).length;
  const totalExercises = exercises.length;

  let html = `<div class="page" style="padding-top:16px">
    <div class="session-header">
      <button data-action="exitSession" class="back-btn">
        <span class="back-btn-arrow">←</span> Back
      </button>
      <div class="session-title-block">
        <p class="session-heading-date"><span style="color:${day.accent}">${session.date} · ${day.label}</span></p>
        <p class="session-heading-focus">${day.focus}</p>
      </div>
    </div>

    <div class="progress-track"><div class="progress-fill" id="progress-fill" style="width:${progress}%;background:${day.accent}"></div></div>
    <div class="progress-counters" id="progress-counters">
      <span class="progress-pill" id="progress-ex"><strong>${completedExercises}/${totalExercises}</strong>&nbsp;exercises</span>
      <span class="progress-pill" id="progress-sets"><strong>${completedSets}/${totalSets}</strong>&nbsp;sets</span>
    </div>

    <div class="ex-nav" id="ex-nav">`;

  exercises.forEach((e, i) => { html += renderExChip(e, i, day, session); });

  html += `<button class="ex-chip" data-action="toggleAddExercise" style="background:${C_FAINT};color:${C_MUTED};border-color:${C_FAINT};font-weight:900">+ Add</button>
    </div>`;

  if (state.showAddExercise) {
    html += renderAddExerciseForm(day, session);
  }

  html += `
    <div id="exercise-card-wrap">${renderExerciseCard(ex, day, session, exercises.length)}</div>

    <div class="note-card">
      <p class="note-label">Session Notes</p>
      <textarea class="note-textarea" id="session-note" rows="3" placeholder="How did it feel? Any PRs? Pain or discomfort? Energy level...">${esc(session.note)}</textarea>
    </div>

    <div class="nav-row">
      ${btn({ label: "← Previous", onclick: "prevEx", color: day.accent, outline: true, disabled: isFirst })}
      ${isLast
        ? btn({ label: "✓ Finish Workout", onclick: "finish", color: C_GREEN })
        : btn({ label: "Next Exercise →", onclick: "nextEx", color: day.accent })
      }
    </div>

    <div class="cooldown-banner">
      <span style="font-size:20px">🚶</span>
      <p><strong>Cool-down:</strong> 10–15 min light walk after this session. Always after weights, never before.</p>
    </div>
  </div>`;

  return html;
}

function renderAddExerciseForm(day, session) {
  const remembered = (state.data.customPlanExercises && state.data.customPlanExercises[session.dayKey]) || [];

  let html = `<div class="note-card" id="add-exercise-form" style="border-color:${hexA(day.accent,"44")}">
    <p class="note-label">Add a custom exercise to today's session</p>
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:8px;margin-bottom:10px">
      <div>
        <p class="set-field-label">Exercise name</p>
        <input class="set-input" id="custom-ex-name" type="text" placeholder="e.g. Cable Pec Fly" />
      </div>
      <div>
        <p class="set-field-label">Sets</p>
        <input class="set-input" id="custom-ex-sets" type="number" inputmode="numeric" value="3" min="1" max="10" />
      </div>
      <div>
        <p class="set-field-label">Target reps</p>
        <input class="set-input" id="custom-ex-reps" type="text" placeholder="10" value="10" />
      </div>
    </div>
    <div style="margin-bottom:12px">
      <p class="set-field-label">Video guide link (optional)</p>
      <input class="set-input" id="custom-ex-video" type="url" placeholder="https://youtube.com/..." />
    </div>
    <label style="display:flex;align-items:center;gap:8px;margin-bottom:12px;cursor:pointer">
      <input type="checkbox" id="custom-ex-remember" style="width:18px;height:18px;accent-color:${day.accent}" />
      <span style="font-size:12px;color:${C_MUTED}">Always include this in ${day.label} (remember for future sessions)</span>
    </label>
    <div style="display:flex;gap:8px">
      ${btn({ label: "Add to Session", onclick: "addCustomExercise", color: day.accent, full: true })}
      ${btn({ label: "Cancel", onclick: "toggleAddExercise", color: C_MUTED, outline: true })}
    </div>
    <p id="add-exercise-error" style="margin:8px 0 0;font-size:11px;color:${C_RED}"></p>
  </div>`;

  if (remembered.length > 0) {
    html += `<div class="note-card">
      <p class="note-label">Always included in ${day.label}</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${remembered.map((ex, i) => `
          <span style="display:inline-flex;align-items:center;gap:6px;background:${C_FAINT};
            border-radius:8px;padding:5px 8px 5px 10px;font-size:11px;color:${C_TEXT}">
            ${esc(ex.name)} <span style="color:${C_MUTED}">${ex.sets}×${esc(ex.reps)}</span>
            ${ex.videoUrl ? `<a href="${esc(ex.videoUrl)}" target="_blank" rel="noopener noreferrer" style="text-decoration:none">▶</a>` : ""}
            <button data-action="removeRememberedExercise:${i}" style="background:none;border:none;
              color:${C_RED};font-size:14px;cursor:pointer;padding:0;line-height:1">×</button>
          </span>
        `).join("")}
      </div>
    </div>`;
  }

  return html;
}

function renderExChip(e, i, day, session) {
  const exSets = session.sets[e.name] || [];
  const allDone = exSets.length > 0 && exSets.every(s => s.done);
  const someDone = exSets.some(s => s.done);
  const isCurrent = i === state.currentEx;
  let bg, color, border;
  if (isCurrent) { bg = day.accent; color = "white"; border = day.accent; }
  else if (allDone) { bg = hexA(C_GREEN,"30"); color = C_GREEN; border = C_GREEN; }
  else if (someDone) { bg = hexA(day.accent,"30"); color = C_MUTED; border = day.accent; }
  else { bg = "#111827"; color = C_MUTED; border = "#1F2937"; }
  return `<button class="ex-chip" data-action="goto:${i}" style="background:${bg};color:${color};border-color:${border}">
    ${allDone ? "✓ " : ""}${i + 1}. ${esc(e.name.split(" ")[0])}
  </button>`;
}

function renderExerciseCard(ex, day, session, total) {
  const isCustom = !PLAN[session.dayKey].exercises.some(e => e.name === ex.name);
  const borderColor = ex.isAbs ? hexA("#7C3AED","44") : hexA(day.accent,"44");
  const videoUrl = getVideoUrl(ex.name, session.dayKey, session);
  const isOverridden = !!(state.data.videoOverrides && state.data.videoOverrides[ex.name]);
  const titleHtml = videoUrl
    ? `<a href="${esc(videoUrl)}" target="_blank" rel="noopener noreferrer" class="ex-title-link">${esc(ex.name)} <span class="video-icon">▶</span></a>`
    : esc(ex.name);
  const muscleInfo = ex.muscles
    ? badge(ex.muscles, "#6B7280", "rgba(107,114,128,0.15)")
    : "";
  const typeInfo = ex.type === "compound"
    ? badge("Compound", "#F59E0B", "rgba(245,158,11,0.15)")
    : ex.type === "isolation"
      ? badge("Isolation", "#06B6D4", "rgba(6,182,212,0.15)")
      : "";

  const isSwapped = !!ex._swappedFrom;
  // For a swapped exercise, look up original to find its alt details
  const origEx = isSwapped ? PLAN[session.dayKey].exercises.find(e => e.name === ex._swappedFrom) : null;
  const altOpen = state.showAlt && !!ex.alt && !isSwapped;

  let html = `<div class="ex-card" style="border-color:${borderColor}">
    <div class="ex-card-head">
      <div>
        <div class="ex-card-badges">
          ${ex.isAbs ? badge("ABS", "#7C3AED", hexA("#7C3AED","20")) : ""}
          ${isCustom ? badge("CUSTOM", "#06B6D4", hexA("#06B6D4","20")) : ""}
          ${typeInfo}${muscleInfo}
          ${badge(`Target: ${ex.sets} × ${ex.reps}`, day.accent, hexA(day.accent,"20"))}
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <h3 class="ex-title">${titleHtml}</h3>
          ${isSwapped
            ? `<button data-action="revertSwap" class="alt-revert-btn" title="Revert to ${esc(ex._swappedFrom)}">↩ ${esc(ex._swappedFrom)}</button>`
            : ex.alt
              ? `<button data-action="toggleAlt" class="alt-inline-btn ${altOpen ? "open" : ""}">${altOpen ? "▲ ALT" : "▼ ALT"}</button>`
              : ""}
          <button data-action="toggleVideoEdit" class="video-edit-btn" title="Edit video guide link">✏️</button>
        </div>
        ${isSwapped ? `<p class="swap-note">Swapped from ${esc(ex._swappedFrom)}</p>` : ""}
      </div>
      <span class="ex-counter">${state.currentEx + 1} / ${total}</span>
    </div>
    ${altOpen && ex.alt ? `<div class="alt-panel">
      <p class="alt-panel-label">⚠️ Alternative Exercise</p>
      <div class="alt-panel-row">
        <div class="alt-panel-info">
          <p class="alt-panel-name">${esc(ex.alt.name)}</p>
          <p class="alt-panel-reason">${esc(ex.alt.reason)}</p>
        </div>
        <div class="alt-panel-stat"><span>${ex.alt.sets}</span><small>Sets</small></div>
        <div class="alt-panel-stat"><span>${ex.alt.reps}</span><small>Reps</small></div>
      </div>
      <button data-action="swapAlt" class="swap-btn">⇄ Swap to this exercise</button>
    </div>` : ""}`;

  if (state.showVideoEdit) {
    html += `<div class="video-edit-form">
      <p class="set-field-label">Video guide link${isOverridden ? " (your link)" : ""}</p>
      <input class="set-input" id="video-override-input" type="url"
        placeholder="https://..." value="${videoUrl ? esc(videoUrl) : ""}" />
      <div style="display:flex;gap:8px;margin-top:8px">
        ${btn({ label: "Save", onclick: "saveVideoOverride", color: day.accent, full: true })}
        ${isOverridden ? btn({ label: "Reset to default", onclick: "resetVideoOverride", color: C_MUTED, outline: true }) : ""}
      </div>
      <p id="video-override-error" style="margin:6px 0 0;font-size:11px;color:${C_RED}"></p>
    </div>`;
  }

  html += `<div id="sets-list">`;

  (session.sets[ex.name] || []).forEach((set, si) => {
    html += renderSetRow(ex, si, set);
  });

  html += `</div>
  <button class="save-ex-btn" data-action="saveExercise">💾 Save Progress</button>
  </div>`;
  return html;
}

function renderSetRow(ex, si, set) {
  return `<div class="set-row ${set.done ? "done" : ""}" data-set="${si}">
    <span class="set-num">Set ${si + 1}</span>
    <div>
      <p class="set-field-label">Weight (kg)</p>
      <input class="set-input" type="number" inputmode="decimal" placeholder="0"
        value="${esc(set.weight)}" data-field="weight" data-set="${si}" />
    </div>
    <div>
      <p class="set-field-label">Reps done</p>
      <input class="set-input" type="number" inputmode="numeric" placeholder="${esc(ex.reps)}"
        value="${esc(set.reps)}" data-field="reps" data-set="${si}" />
    </div>
    <button class="set-done-btn ${set.done ? "done" : ""}" data-action="toggleDone:${si}">✓</button>
  </div>`;
}

// ── CALENDAR SCREEN ──────────────────────────────────────────
function renderCalendar() {
  const data = state.data;
  const monthStart = state.calendarMonth;
  const year = monthStart.getFullYear(), month = monthStart.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7; // Monday = 0
  const totalDays = lastDay.getDate();
  const todayS = todayStr();

  const sessionsByDate = {};
  data.sessions.forEach(s => { sessionsByDate[s.date] = s; });

  let html = `<div class="page">
    <p class="eyebrow">Training Calendar</p>
    <h2 class="h2">Calendar</h2>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      ${btn({ label: "‹", onclick: "calMonth:-1", small: true, outline: true, color: "#3B82F6" })}
      <span style="font-size:15px;font-weight:800">${firstDay.toLocaleString("default", { month: "long", year: "numeric" })}</span>
      ${btn({ label: "›", onclick: "calMonth:1", small: true, outline: true, color: "#3B82F6" })}
    </div>

    <div class="week-grid" style="margin-bottom:6px">
      ${WEEKDAYS.map(d => `<div style="text-align:center;font-size:10px;font-weight:700;color:${C_MUTED}">${d[0]}</div>`).join("")}
    </div>

    <div class="cal-grid">`;

  for (let i = 0; i < startOffset; i++) html += `<div class="cal-cell empty"></div>`;

  for (let day = 1; day <= totalDays; day++) {
    const dateObj = new Date(year, month, day);
    const dateS = fmtDate(dateObj);
    const sess = sessionsByDate[dateS];
    const isToday = dateS === todayS;
    const isFuture = dateS > todayS;
    const weekday = WEEKDAYS[(dateObj.getDay() + 6) % 7];
    const plannedKey = SCHEDULE[weekday];
    const isSelected = state.calendarSelected === dateS;

    let bg = "transparent", color = C_MUTED, border = "#1F2937", mark = "";

    if (sess) {
      const acc = PLAN[sess.dayKey].accent;
      bg = hexA(acc, "30"); color = acc; border = acc;
      mark = `<div style="font-size:8px;font-weight:800;margin-top:1px">${sess.dayKey}</div>`;
    } else if (!isFuture && plannedKey && !isToday) {
      bg = hexA("#EF4444", "12"); color = "#EF4444"; border = hexA("#EF4444", "60");
      mark = `<div style="font-size:8px;font-weight:800;margin-top:1px">missed</div>`;
    } else if (plannedKey) {
      border = hexA(PLAN[plannedKey].accent, "50");
    }

    const ring = isToday ? "box-shadow:inset 0 0 0 2px #3B82F6;" : "";
    const selRing = isSelected ? "box-shadow:inset 0 0 0 2px white;" : ring;

    html += `<div class="cal-cell" data-action="calDay:${dateS}"
      style="background:${bg};color:${color};border-color:${border};${selRing}">
      <div style="font-size:12px;font-weight:${isToday ? "900" : "600"}">${day}</div>
      ${mark}
    </div>`;
  }

  html += `</div>`;

  // Legend
  html += `<div style="display:flex;gap:10px;flex-wrap:wrap;margin:14px 0">
    ${DAYS.map(k => `<div style="display:flex;align-items:center;gap:4px">
      <div style="width:10px;height:10px;border-radius:3px;background:${hexA(PLAN[k].accent,"30")};border:1px solid ${PLAN[k].accent}"></div>
      <span style="font-size:10px;color:${C_MUTED}">Day ${k}</span>
    </div>`).join("")}
    <div style="display:flex;align-items:center;gap:4px">
      <div style="width:10px;height:10px;border-radius:3px;background:${hexA("#EF4444","12")};border:1px solid ${hexA("#EF4444","60")}"></div>
      <span style="font-size:10px;color:${C_MUTED}">Missed</span>
    </div>
  </div>`;

  // Selected day detail
  if (state.calendarSelected) {
    const sess = sessionsByDate[state.calendarSelected];
    if (sess) {
      html += renderSessionCard(sess);
    } else {
      html += `<div class="chart-card" style="text-align:center;color:${C_MUTED}">
        <p style="font-size:12px;margin:0">No session logged on ${state.calendarSelected}.</p>
      </div>`;
    }
  } else {
    html += `<div class="chart-card" style="text-align:center;color:${C_MUTED}">
      <p style="font-size:12px;margin:0">Tap a date to see that session's details.</p>
    </div>`;
  }

  html += `</div>`;
  return html;
}

// Shared session detail card — used by both History and Calendar
function renderSessionCard(sess) {
  const day = PLAN[sess.dayKey];
  const doneCount = Object.values(sess.sets).flat().filter(s => s.done).length;
  const duration = (sess.finishedAt && sess.startedAt)
    ? `${Math.round((sess.finishedAt - sess.startedAt) / 60000)} min` : null;

  let html = `<div class="session-card">
    <div class="session-card-head" style="background:${hexA(day.accent,"20")}">
      <div>
        <p style="margin:0;font-size:13px;font-weight:800">${day.label} — ${sess.date}</p>
        <p style="margin:0;font-size:11px;color:${day.accent}">${doneCount} sets completed</p>
      </div>
      ${duration ? badge(duration, day.accent, hexA(day.accent,"30")) : ""}
    </div>
    <div class="session-card-body">`;

  Object.entries(sess.sets).forEach(([exName, sets]) => {
    const doneSets = sets.filter(s => s.done);
    if (doneSets.length === 0) return;
    const maxWeight = Math.max(...doneSets.map(s => parseFloat(s.weight) || 0));
    const videoUrl = getVideoUrl(exName, sess.dayKey, sess);
    const nameHtml = videoUrl
      ? `<a href="${esc(videoUrl)}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;border-bottom:1px dashed ${C_MUTED}">${esc(exName)}</a>`
      : esc(exName);
    html += `<div class="ex-result-row">
      <span style="font-size:12px;font-weight:600">${nameHtml}</span>
      <div style="display:flex;gap:8px">
        ${badge(`${doneSets.length} sets`, C_MUTED, C_FAINT)}
        ${maxWeight > 0 ? badge(`${maxWeight}kg`, day.accent, hexA(day.accent,"20")) : ""}
      </div>
    </div>`;
  });

  if (sess.note) {
    html += `<div class="notes-box">
      <p class="lbl">Notes</p>
      <p class="txt">${esc(sess.note)}</p>
    </div>`;
  }

  html += `</div></div>`;
  return html;
}

// ── HISTORY SCREEN ───────────────────────────────────────────
function renderHistory() {
  const data = state.data;
  const day = PLAN[state.historyDay];
  const sessions = data.sessions.filter(s => s.dayKey === state.historyDay).slice().reverse();

  let html = `<div class="page">
    <p class="eyebrow">Session History</p>
    <h2 class="h2">Past Workouts</h2>
    <div class="day-filter">`;

  DAYS.forEach(k => {
    const active = state.historyDay === k;
    html += `<button data-action="historyDay:${k}" class="${active ? "active" : ""}"
      style="${active ? `background:${PLAN[k].accent};border-color:${PLAN[k].accent}` : ""}">Day ${k}</button>`;
  });
  html += `</div>`;

  if (sessions.length === 0) {
    html += `<div class="empty-state">
      <p class="emoji">📋</p>
      <p>No sessions logged for ${day.label} yet.</p>
      <p class="sub">Start a session from the Home tab.</p>
    </div>`;
  } else {
    sessions.forEach(sess => {
      html += renderSessionCard(sess);
    });
  }

  html += `</div>`;
  return html;
}

// ── PROGRESS SCREEN ──────────────────────────────────────────
function renderProgress() {
  let html = `<div class="page">
    <p class="eyebrow">Your Progress</p>
    <h2 class="h2">Strength Tracker</h2>

    <div class="day-filter">`;
  [["exercise", "By Exercise"], ["weekly", "Weekly"], ["monthly", "Monthly"], ["weight", "Body Weight"]].forEach(([key, label]) => {
    const active = state.progressView === key;
    html += `<button data-action="progressView:${key}" class="${active ? "active" : ""}"
      style="${active ? "background:#3B82F6;border-color:#3B82F6" : ""}">${label}</button>`;
  });
  html += `</div>`;

  if (state.progressView === "weekly") html += renderPeriodProgress("week");
  else if (state.progressView === "monthly") html += renderPeriodProgress("month");
  else if (state.progressView === "weight") html += renderBodyWeightProgress();
  else html += renderExerciseProgress();

  html += `</div>`;
  return html;
}

// ── Body weight progress ───────────────────────────────────────
function renderBodyWeightProgress() {
  const entries = (state.data.bodyWeights || []).slice().sort((a, b) => a.date.localeCompare(b.date));

  if (entries.length === 0) {
    return `<div class="chart-card" style="text-align:center;color:${C_MUTED}">
      <p class="emoji" style="font-size:24px;margin:0 0 6px">⚖️</p>
      <p style="font-size:12px;margin:0">No weight logged yet. Use the "Log Weight" button on Home to start tracking.</p>
    </div>`;
  }

  const latest = entries[entries.length - 1];
  const first = entries[0];
  const totalChange = Math.round((latest.weight - first.weight) * 10) / 10;
  const changeColor = totalChange > 0 ? "#F59E0B" : totalChange < 0 ? C_GREEN : C_MUTED;
  const changeArrow = totalChange > 0 ? "▲" : totalChange < 0 ? "▼" : "—";

  let html = `<div class="stats-row" style="margin-bottom:16px">
    <div class="stat-card"><p class="stat-value">${latest.weight}</p><p class="stat-label">Current (kg)</p></div>
    <div class="stat-card"><p class="stat-value">${first.weight}</p><p class="stat-label">Starting (kg)</p></div>
    <div class="stat-card"><p class="stat-value" style="color:${changeColor}">${changeArrow}${Math.abs(totalChange)}</p><p class="stat-label">Total Change (kg)</p></div>
  </div>`;

  // Sub-view tabs: Daily / Weekly / Monthly
  html += `<div class="day-filter">`;
  [["daily", "Daily"], ["weekly", "Weekly"], ["monthly", "Monthly"]].forEach(([key, label]) => {
    const active = state.weightView === key;
    html += `<button data-action="weightView:${key}" class="${active ? "active" : ""}"
      style="${active ? "background:#3B82F6;border-color:#3B82F6" : ""}">${label}</button>`;
  });
  html += `</div>`;

  const chartData = aggregateBodyWeight(state.weightView);

  html += `<div class="chart-card">
    <p class="chart-title">Body Weight</p>
    <p class="chart-sub">${
      state.weightView === "daily" ? "Each logged entry (kg)" :
      state.weightView === "weekly" ? "Average per week (kg)" :
      "Average per month (kg)"
    }</p>`;
  if (chartData.length < 2) {
    html += `<div class="chart-empty"><p class="emoji">📊</p><p>Log at least 2 ${state.weightView === "daily" ? "days" : state.weightView}s to see your trend.</p></div>`;
  } else {
    html += svgLineChart(chartData, "weight", "#3B82F6", "kg");
  }
  html += `</div>`;

  // Recent entries list
  html += `<p class="section-label">Recent Entries</p>`;
  entries.slice().reverse().slice(0, 10).forEach(e => {
    html += `<div class="pb-row">
      <p class="pb-name">${esc(e.date)}</p>
      <span class="pb-weight" style="color:#3B82F6">${e.weight}kg</span>
    </div>`;
  });

  return html;
}

// ── Weekly / Monthly aggregate progress ───────────────────────
function renderPeriodProgress(period) {
  const chartData = aggregateSessions(period);
  const isWeek = period === "week";

  if (chartData.length === 0) {
    return `<div class="chart-card" style="text-align:center;color:${C_MUTED}">
      <p class="emoji" style="font-size:24px;margin:0 0 6px">📅</p>
      <p style="font-size:12px;margin:0">Complete sessions to see ${isWeek ? "weekly" : "monthly"} trends.</p>
    </div>`;
  }

  const chartRows = chartData.map(d => ({ ...d, date: d.shortLabel }));
  const totalSessions = chartData.reduce((s, d) => s + d.sessions, 0);
  const totalVolume = chartData.reduce((s, d) => s + d.volume, 0);
  const avgSessions = (totalSessions / chartData.length).toFixed(1);

  let html = `<div class="stats-row" style="margin-bottom:16px">
    <div class="stat-card"><p class="stat-value">${chartData.length}</p><p class="stat-label">${isWeek ? "Weeks" : "Months"} Logged</p></div>
    <div class="stat-card"><p class="stat-value">${totalSessions}</p><p class="stat-label">Total Sessions</p></div>
    <div class="stat-card"><p class="stat-value">${avgSessions}</p><p class="stat-label">Avg / ${isWeek ? "Week" : "Month"}</p></div>
  </div>`;

  html += `<div class="chart-card">
    <p class="chart-title">Sessions Completed</p>
    <p class="chart-sub">${isWeek ? "Per week — target: 4" : "Per month"}</p>
    ${svgBarChart(chartRows, "sessions", "#10B981", "")}
  </div>`;

  html += `<div class="chart-card">
    <p class="chart-title">Training Volume</p>
    <p class="chart-sub">Total weight × reps lifted, ${isWeek ? "per week" : "per month"} (kg)</p>
    ${svgLineChart(chartRows, "volume", "#F59E0B", "")}
  </div>`;

  html += `<div class="chart-card">
    <p class="chart-title">Sets Completed</p>
    <p class="chart-sub">Total working sets, ${isWeek ? "per week" : "per month"}</p>
    ${svgBarChart(chartRows, "sets", "#8B5CF6", "")}
  </div>`;

  // Period breakdown list
  html += `<p class="section-label">${isWeek ? "Weekly" : "Monthly"} Breakdown</p>`;
  chartData.slice().reverse().forEach(d => {
    html += `<div class="pb-row">
      <div>
        <p class="pb-name">${esc(d.label)}</p>
        <p class="pb-date">${d.sessions} session${d.sessions === 1 ? "" : "s"} · ${d.sets} sets</p>
      </div>
      <span class="pb-weight" style="color:#F59E0B">${d.volume.toLocaleString()}kg</span>
    </div>`;
  });

  return html;
}

// ── Per-exercise progress (original view) ─────────────────────
function renderExerciseProgress() {
  const data = state.data;
  const day = PLAN[state.progressDay];
  const { planNames, customNames, all: allExercises } = getAllExerciseNames(state.progressDay);
  if (!allExercises.includes(state.progressEx)) state.progressEx = allExercises[0];

  const chartData = data.sessions
    .filter(s => s.dayKey === state.progressDay && s.sets[state.progressEx])
    .map(sess => {
      const sets = (sess.sets[state.progressEx] || []).filter(s => s.done && s.weight);
      if (sets.length === 0) return null;
      const maxWeight = Math.max(...sets.map(s => parseFloat(s.weight) || 0));
      const volume = sets.reduce((sum, s) => sum + (parseFloat(s.weight) || 0) * (parseInt(s.reps) || 0), 0);
      return { date: sess.date.slice(5), maxWeight, volume };
    })
    .filter(Boolean);

  // PBs
  const pbs = {};
  data.sessions.forEach(sess => {
    Object.entries(sess.sets).forEach(([exName, sets]) => {
      sets.forEach(set => {
        if (set.done && set.weight) {
          const w = parseFloat(set.weight);
          if (!pbs[exName] || w > pbs[exName].weight) pbs[exName] = { weight: w, date: sess.date };
        }
      });
    });
  });

  let html = `<div class="day-filter">`;
  DAYS.forEach(k => {
    const active = state.progressDay === k;
    html += `<button data-action="progressDay:${k}" class="${active ? "active" : ""}"
      style="${active ? `background:${PLAN[k].accent};border-color:${PLAN[k].accent}` : ""}">Day ${k}</button>`;
  });
  html += `</div>

    <div class="ex-list-scroll">`;
  allExercises.forEach(name => {
    const active = state.progressEx === name;
    const isCustom = customNames.includes(name);
    html += `<button class="ex-pill ${active ? "active" : ""}" data-action="progressEx:${esc(name)}"
      style="${active ? `background:${day.accent};border-color:${day.accent}` : ""}">${isCustom ? "⭐ " : ""}${esc(name)}</button>`;
  });
  html += `</div>`;

  // Max weight chart
  html += `<div class="chart-card">
    <p class="chart-title">${esc(state.progressEx)}</p>
    <p class="chart-sub">Max weight per session (kg)</p>`;
  if (chartData.length < 2) {
    html += `<div class="chart-empty"><p class="emoji">📊</p><p>Log at least 2 sessions to see your progress chart.</p></div>`;
  } else {
    html += svgLineChart(chartData, "maxWeight", day.accent, "kg");
  }
  html += `</div>`;

  // Volume chart
  if (chartData.length >= 2) {
    html += `<div class="chart-card">
      <p class="chart-title">Total Volume</p>
      <p class="chart-sub">Weight × reps per session</p>
      ${svgLineChart(chartData, "volume", "#F59E0B", "")}
    </div>`;
  }

  // PBs
  html += `<p class="section-label">Personal Bests 🏆</p>`;
  const pbEntries = Object.entries(pbs).sort((a, b) => b[1].weight - a[1].weight);
  if (pbEntries.length === 0) {
    html += `<div class="chart-card" style="text-align:center;color:${C_MUTED}">
      <p style="font-size:12px;margin:0">Start logging sessions to track your personal bests.</p>
    </div>`;
  } else {
    pbEntries.forEach(([name, pb]) => {
      html += `<div class="pb-row">
        <div>
          <p class="pb-name">${esc(name)}</p>
          <p class="pb-date">${esc(pb.date)}</p>
        </div>
        <span class="pb-weight">${pb.weight}kg</span>
      </div>`;
    });
  }

  return html;
}

// ── SVG bar chart ────────────────────────────────────────────
function svgBarChart(data, key, color, unit) {
  const W = 300, H = 160, padL = 34, padR = 10, padT = 10, padB = 24;
  const values = data.map(d => d[key]);
  const max = Math.max(...values, 1);
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const gap = plotW / data.length;
  const barW = Math.min(gap * 0.55, 36);

  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" preserveAspectRatio="xMidYMid meet" style="overflow:visible">`;

  for (let i = 0; i <= 3; i++) {
    const y = padT + (plotH / 3) * i;
    const val = max - (max / 3) * i;
    svg += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="${C_FAINT}" stroke-dasharray="3 3" stroke-width="0.5" />`;
    svg += `<text x="${padL - 4}" y="${y + 3}" font-size="9" fill="${C_MUTED}" text-anchor="end">${Math.round(val)}${unit}</text>`;
  }

  data.forEach((d, i) => {
    const x = padL + gap * i + (gap - barW) / 2;
    const h = (d[key] / max) * plotH;
    const y = padT + plotH - h;
    svg += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${Math.max(h,1).toFixed(1)}" rx="3" fill="${color}" />`;
    if (d[key] > 0) {
      svg += `<text x="${(x + barW / 2).toFixed(1)}" y="${(y - 4).toFixed(1)}" font-size="9" fill="${color}" text-anchor="middle" font-weight="700">${d[key]}</text>`;
    }
    svg += `<text x="${(x + barW / 2).toFixed(1)}" y="${H - 6}" font-size="9" fill="${C_MUTED}" text-anchor="middle">${esc(d.date)}</text>`;
  });

  svg += `</svg>`;
  return svg;
}

// ── SVG line chart ───────────────────────────────────────────
function svgLineChart(data, key, color, unit) {
  const W = 300, H = 160, padL = 34, padR = 10, padT = 10, padB = 24;
  const values = data.map(d => d[key]);
  let min = Math.min(...values), max = Math.max(...values);
  if (min === max) { min -= 1; max += 1; }
  const range = max - min;
  const plotW = W - padL - padR, plotH = H - padT - padB;

  const points = data.map((d, i) => {
    const x = padL + (data.length === 1 ? plotW / 2 : (i / (data.length - 1)) * plotW);
    const y = padT + plotH - ((d[key] - min) / range) * plotH;
    return { x, y, val: d[key], label: d.date };
  });

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");

  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" preserveAspectRatio="xMidYMid meet" style="overflow:visible">`;

  // grid lines
  for (let i = 0; i <= 3; i++) {
    const y = padT + (plotH / 3) * i;
    const val = max - (range / 3) * i;
    svg += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="${C_FAINT}" stroke-dasharray="3 3" stroke-width="0.5" />`;
    svg += `<text x="${padL - 4}" y="${y + 3}" font-size="9" fill="${C_MUTED}" text-anchor="end">${Math.round(val)}${unit}</text>`;
  }

  // line
  svg += `<path d="${pathD}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />`;

  // dots + x labels
  points.forEach((p, i) => {
    svg += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}" />`;
    if (i === 0 || i === points.length - 1 || points.length <= 5 || i % Math.ceil(points.length / 5) === 0) {
      svg += `<text x="${p.x}" y="${H - 6}" font-size="9" fill="${C_MUTED}" text-anchor="middle">${esc(p.label)}</text>`;
    }
  });

  svg += `</svg>`;
  return svg;
}

// ── Event handling ───────────────────────────────────────────
function attachHandlers() {
  const app = document.getElementById("app");

  // Click handlers via delegation
  app.addEventListener("click", onAppClick);

  // Session-specific input handlers (only present on session screen)
  if (state.screen === "session") {
    const setsList = document.getElementById("sets-list");
    if (setsList) {
      setsList.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", onSetInput);
      });
    }
    const noteArea = document.getElementById("session-note");
    if (noteArea) {
      noteArea.addEventListener("input", (e) => {
        state.session.note = e.target.value;
        saveSessionDraft();
      });
    }
  }
}

async function onAppClick(e) {
  const target = e.target.closest("[data-action]");
  if (!target) return;
  const action = target.getAttribute("data-action");
  const [cmd, arg] = action.split(":");

  switch (cmd) {
    case "nav":
      state.screen = arg;
      render();
      break;
    case "start":
      startSession(arg);
      break;
    case "finish":
      finishSession();
      break;
    case "exitSession": {
      const allSets = Object.values(state.session.sets).flat();
      const anyProgress = allSets.some(s => s.done || s.weight || s.reps) || state.session.note.trim();
      if (!anyProgress) {
        state.session = null;
        clearSessionDraft();
        state.screen = "home";
        render();
        break;
      }
      state.confirmModal = {
        icon: "🏋️",
        title: "Leave this session?",
        message: "Your progress is saved as a draft and will be here when you return.",
        yesLabel: "Save & Exit",
        noLabel: "Keep Going",
        yesAction: "confirmFinishExit",
      };
      render();
      break;
    }
    case "confirmFinishExit":
      state.confirmModal = null;
      finishSession();
      break;
    case "goto":
      state.currentEx = parseInt(arg, 10);
      state.showAlt = false;
      updateSessionExerciseView();
      break;
    case "prevEx":
      if (state.currentEx > 0) { state.currentEx--; state.showAlt = false; updateSessionExerciseView(); }
      break;
    case "nextEx": {
      const exercises = getSessionExercises(state.session);
      if (state.currentEx < exercises.length - 1) { state.currentEx++; state.showAlt = false; updateSessionExerciseView(); }
      break;
    }
    case "toggleDone": {
      const si = parseInt(arg, 10);
      const exercises = getSessionExercises(state.session);
      const ex = exercises[state.currentEx];
      state.session.sets[ex.name][si].done = !state.session.sets[ex.name][si].done;
      saveSessionDraft();
      updateProgressAndChips();
      const row = document.querySelector(`.set-row[data-set="${si}"]`);
      const isDone = state.session.sets[ex.name][si].done;
      row.classList.toggle("done", isDone);
      target.classList.toggle("done", isDone);
      break;
    }
    case "saveExercise": {
      saveSessionDraft();
      target.classList.add("saved");
      target.innerHTML = "✓ Saved!";
      setTimeout(() => {
        if (target.isConnected) {
          target.classList.remove("saved");
          target.innerHTML = "💾 Save Progress";
        }
      }, 1600);
      break;
    }
    case "noop":
      break;
    case "dismissModal":
      state.confirmModal = null;
      render();
      break;
    case "toggleUserMenu":
      state.showUserMenu = !state.showUserMenu;
      render();
      break;
    case "closeUserMenu":
      state.showUserMenu = false;
      render();
      break;
    case "toggleTheme": {
      const next = getTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      render();
      break;
    }
    case "historyDay":
      state.historyDay = arg;
      render();
      break;
    case "progressDay":
      state.progressDay = arg;
      state.progressEx = PLAN[arg].exercises[0].name;
      render();
      break;
    case "progressEx":
      state.progressEx = arg;
      render();
      break;
    case "progressView":
      state.progressView = arg;
      render();
      break;
    case "weightView":
      state.weightView = arg;
      render();
      break;
    case "calMonth": {
      const delta = parseInt(arg, 10);
      const d = state.calendarMonth;
      state.calendarMonth = new Date(d.getFullYear(), d.getMonth() + delta, 1);
      state.calendarSelected = null;
      render();
      break;
    }
    case "calDay":
      state.calendarSelected = state.calendarSelected === arg ? null : arg;
      render();
      break;
    case "signInGoogle": {
      const statusEl = document.getElementById("login-status");
      target.disabled = true;
      statusEl.textContent = "Opening Google sign-in...";
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin + window.location.pathname },
      });
      if (error) {
        target.disabled = false;
        statusEl.textContent = "Couldn't start sign-in: " + error.message;
      }
      // On success, the browser navigates away to Google — no further
      // action needed here.
      break;
    }
    case "signOut":
      state.confirmModal = {
        icon: "🚪",
        title: "Sign out?",
        message: "Your workouts and progress are safely saved in the cloud.",
        yesLabel: "Sign out",
        noLabel: "Stay signed in",
        yesAction: "confirmSignOut",
        danger: true,
      };
      state.showUserMenu = false;
      render();
      break;
    case "confirmSignOut": {
      await supabaseClient.auth.signOut();
      state.user = null;
      state.data = { ...EMPTY_DATA };
      state.screen = "login";
      state.confirmModal = null;
      render();
      break;
    }
    case "retrySync": {
      target.textContent = "⏳ Syncing...";
      target.disabled = true;
      await syncPendingItems();
      render();
      break;
    }
    case "toggleGuide":
      state.showGuide = !state.showGuide;
      render();
      break;
    case "toggleAlt":
      state.showAlt = !state.showAlt;
      refreshExerciseCard();
      break;
    case "swapAlt": {
      const exercises = getSessionExercises(state.session);
      const exToSwap = exercises[state.currentEx];
      if (!exToSwap.alt) break;
      if (!state.session.swappedExercises) state.session.swappedExercises = {};
      state.session.swappedExercises[exToSwap.name] = { altName: exToSwap.alt.name, altSets: exToSwap.alt.sets, altReps: exToSwap.alt.reps };
      if (!state.session.sets[exToSwap.alt.name]) {
        state.session.sets[exToSwap.alt.name] = Array.from({ length: exToSwap.alt.sets }, () => ({ weight: "", reps: exToSwap.alt.reps, done: false }));
      }
      state.showAlt = false;
      saveSessionDraft();
      render();
      break;
    }
    case "revertSwap": {
      const exercises = getSessionExercises(state.session);
      const exToRevert = exercises[state.currentEx];
      if (!exToRevert._swappedFrom || !state.session.swappedExercises) break;
      delete state.session.swappedExercises[exToRevert._swappedFrom];
      saveSessionDraft();
      render();
      break;
    }
    case "toggleVideoEdit":
      state.showVideoEdit = !state.showVideoEdit;
      refreshExerciseCard();
      break;
    case "saveVideoOverride": {
      const input = document.getElementById("video-override-input");
      const errorEl = document.getElementById("video-override-error");
      const url = input.value.trim();
      if (!url) { errorEl.textContent = "Enter a video link, or use Reset to remove a custom link."; return; }
      if (!/^https?:\/\//i.test(url)) { errorEl.textContent = "Link should start with http:// or https://"; return; }

      const exercises = getSessionExercises(state.session);
      const ex = exercises[state.currentEx];
      await setVideoOverride(ex.name, url);
      state.showVideoEdit = false;
      refreshExerciseCard();
      break;
    }
    case "resetVideoOverride": {
      const exercises = getSessionExercises(state.session);
      const ex = exercises[state.currentEx];
      await setVideoOverride(ex.name, null);
      state.showVideoEdit = false;
      refreshExerciseCard();
      break;
    }
    case "toggleAddExercise":
      state.showAddExercise = !state.showAddExercise;
      render();
      break;
    case "toggleWeightInput":
      state.showWeightInput = !state.showWeightInput;
      render();
      break;
    case "saveWeight": {
      const input = document.getElementById("weight-input");
      const errorEl = document.getElementById("weight-error");
      const val = input.value.trim();
      if (!val || isNaN(parseFloat(val)) || parseFloat(val) <= 0 || parseFloat(val) > 500) {
        errorEl.textContent = "Enter a valid weight in kg.";
        return;
      }
      const ok = await logBodyWeight(val);
      if (ok) {
        state.showWeightInput = false;
        render();
      } else {
        errorEl.textContent = "Couldn't save — try again.";
      }
      break;
    }
    case "addCustomExercise": {
      const nameInput = document.getElementById("custom-ex-name");
      const setsInput = document.getElementById("custom-ex-sets");
      const repsInput = document.getElementById("custom-ex-reps");
      const videoInput = document.getElementById("custom-ex-video");
      const rememberInput = document.getElementById("custom-ex-remember");
      const errorEl = document.getElementById("add-exercise-error");
      const name = nameInput.value.trim();
      const sets = Math.max(1, Math.min(10, parseInt(setsInput.value, 10) || 3));
      const reps = repsInput.value.trim() || "10";
      const videoUrl = videoInput.value.trim();
      const remember = rememberInput.checked;

      const exercises = getSessionExercises(state.session);
      if (!name) { errorEl.textContent = "Enter an exercise name."; return; }
      if (exercises.some(e => e.name.toLowerCase() === name.toLowerCase())) {
        errorEl.textContent = "This exercise is already in today's session.";
        return;
      }
      if (videoUrl && !/^https?:\/\//i.test(videoUrl)) {
        errorEl.textContent = "Video link should start with http:// or https://";
        return;
      }

      const newEx = { name, sets, reps };
      if (videoUrl) newEx.videoUrl = videoUrl;
      state.session.customExercises = state.session.customExercises || [];
      state.session.customExercises.push(newEx);
      state.session.sets[name] = Array.from({ length: sets }, () => ({ weight: "", reps: "", done: false }));

      if (remember) {
        const dayKey = state.session.dayKey;
        state.data.customPlanExercises = state.data.customPlanExercises || {};
        state.data.customPlanExercises[dayKey] = state.data.customPlanExercises[dayKey] || [];
        state.data.customPlanExercises[dayKey].push(newEx);
        saveLocalData(state.data);

        if (supabaseClient && state.user) {
          const ok = await pushCustomPlanExerciseToSupabase(dayKey, newEx);
          if (!ok) queuePendingSync({ kind: "customExercise", dayKey, data: newEx });
        }
      }

      state.showAddExercise = false;
      state.currentEx = getSessionExercises(state.session).length - 1; // jump to new exercise
      render();
      break;
    }
    case "removeRememberedExercise": {
      const dayKey = state.session.dayKey;
      const idx = parseInt(arg, 10);
      const list = (state.data.customPlanExercises && state.data.customPlanExercises[dayKey]) || [];
      const removed = list[idx];
      list.splice(idx, 1);
      saveLocalData(state.data);

      if (removed && supabaseClient && state.user) {
        supabaseClient.from("custom_plan_exercises")
          .delete()
          .eq("user_id", state.user.id)
          .eq("day_key", dayKey)
          .eq("name", removed.name)
          .then(() => {})
          .catch(() => {});
      }
      render();
      break;
    }
  }
}

function onSetInput(e) {
  const exercises = getSessionExercises(state.session);
  const ex = exercises[state.currentEx];
  const si = parseInt(e.target.getAttribute("data-set"), 10);
  const field = e.target.getAttribute("data-field");
  state.session.sets[ex.name][si][field] = e.target.value;
  saveSessionDraft();
}

// Re-render just the exercise card (and rebind its inputs) without touching
// nav chips, prev/next buttons, or the showVideoEdit flag
function refreshExerciseCard() {
  const session = state.session;
  const day = PLAN[session.dayKey];
  const exercises = getSessionExercises(session);
  const ex = exercises[state.currentEx];

  const wrap = document.getElementById("exercise-card-wrap");
  wrap.innerHTML = renderExerciseCard(ex, day, session, exercises.length);
  wrap.querySelectorAll("input").forEach(input => input.addEventListener("input", onSetInput));
}

// Partial re-render: just the exercise card + nav chips, without losing note focus
function updateSessionExerciseView() {
  const session = state.session;
  const day = PLAN[session.dayKey];
  const exercises = getSessionExercises(session);
  const ex = exercises[state.currentEx];
  state.showVideoEdit = false; // close any open video-edit form when switching exercises

  // Update exercise card
  refreshExerciseCard();

  // Update nav chips
  const exNav = document.getElementById("ex-nav");
  exNav.innerHTML = exercises.map((e, i) => renderExChip(e, i, day, session)).join("")
    + `<button class="ex-chip" data-action="toggleAddExercise" style="background:${C_FAINT};color:${C_MUTED};border-color:${C_FAINT};font-weight:900">+ Add</button>`;

  // Update prev/next/finish buttons
  const isFirst = state.currentEx === 0;
  const isLast = state.currentEx === exercises.length - 1;
  const navRow = document.querySelector(".nav-row");
  navRow.innerHTML = `
    ${btn({ label: "← Previous", onclick: "prevEx", color: day.accent, outline: true, disabled: isFirst })}
    ${isLast
      ? btn({ label: "✓ Finish Workout", onclick: "finish", color: C_GREEN })
      : btn({ label: "Next Exercise →", onclick: "nextEx", color: day.accent })
    }
  `;
}

function updateProgressAndChips() {
  const session = state.session;
  const allSets = Object.values(session.sets).flat();
  const completedSets = allSets.filter(s => s.done).length;
  const totalSets = allSets.length;
  const progress = totalSets > 0 ? (completedSets / totalSets) * 100 : 0;

  const day = PLAN[session.dayKey];
  const exercises = getSessionExercises(session);
  const completedExercises = exercises.filter(e => {
    const s = session.sets[e.name] || [];
    return s.length > 0 && s.every(x => x.done);
  }).length;

  const fill = document.getElementById("progress-fill");
  if (fill) fill.style.width = progress + "%";

  const exEl = document.getElementById("progress-ex");
  if (exEl) exEl.innerHTML = `<strong>${completedExercises}/${exercises.length}</strong>&nbsp;exercises`;
  const setsEl = document.getElementById("progress-sets");
  if (setsEl) setsEl.innerHTML = `<strong>${completedSets}/${totalSets}</strong>&nbsp;sets`;

  // Update nav chips
  const exNav = document.getElementById("ex-nav");
  if (exNav) exNav.innerHTML = exercises.map((e, i) => renderExChip(e, i, day, session)).join("")
    + `<button class="ex-chip" data-action="toggleAddExercise" style="background:${C_FAINT};color:${C_MUTED};border-color:${C_FAINT};font-weight:900">+ Add</button>`;
}

// ── Init ─────────────────────────────────────────────────────
function restoreDraftSession() {
  const draft = loadSessionDraft();
  if (draft && PLAN[draft.dayKey]) {
    state.session = draft;
    state.currentEx = 0;
    state.screen = "session";
    return true;
  }
  return false;
}

async function init() {
  if (!SUPABASE_CONFIGURED) {
    state.data = loadLocalData();
    if (!restoreDraftSession()) state.screen = "home";
    render();
    return;
  }

  // Show cached local data immediately while we check auth
  state.data = loadLocalData();

  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) {
    state.user = session.user;
    state.authStatus = "authenticated";
    await syncFromSupabase();
    if (!restoreDraftSession()) state.screen = "home";
  } else {
    state.screen = "login";
  }
  render();
  syncPendingItems();

  // Retry pending syncs whenever the device comes back online
  window.addEventListener("online", () => syncPendingItems());

  // Periodic retry while the app is open (covers flaky connections
  // that don't fire a clean "online" event)
  setInterval(() => syncPendingItems(), 30000);

  // Handle magic-link sign-in (and future auth changes)
  supabaseClient.auth.onAuthStateChange(async (_event, newSession) => {
    if (newSession && (!state.user || state.user.id !== newSession.user.id)) {
      state.user = newSession.user;
      state.authStatus = "authenticated";
      await syncFromSupabase();
      state.screen = "home";
      render();
      syncPendingItems();
    } else if (!newSession && state.user) {
      state.user = null;
      state.screen = "login";
      render();
    }
  });
}

init();

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
