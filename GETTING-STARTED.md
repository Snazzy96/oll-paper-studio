# Getting Started — your full manual

Everything you need to use this workspace. Read top to bottom once; after that you'll just be dropping in assignments and asking for drafts.

---

## Phase 1 — Get Claude Code on your computer (one time)

You only do this once. Open `START.md` and follow it — or the short version:

1. Go to [claude.ai](https://claude.ai), sign in with your paid Claude account, start a **new chat**.
2. **Attach `START.md`** (the paperclip / upload button) and send it.
3. From there, claude.ai becomes your setup coach. It gives you **one step at a time** — installing Claude Code and Git on Windows, logging in, picking the best model. When something errors, paste the error or a screenshot and it fixes it with you.
4. At the end it hands you a block of text to paste into your new Claude Code window. Paste it, press Enter, approve the permission prompts.

When you've got a Claude Code window open *inside this folder* and it's responding to you, Phase 1 is done.

> **Which model?** Use Opus (the coach sets this with `/model opus`). It's the strongest and best at sounding like a real person.

---

## Phase 2 — Finish setup (one time, conversational)

In the Claude Code window, type:

```
finish my setup
```

Claude will walk you through four things, one at a time (it's reading the "First run" section of `CLAUDE.md`):

1. **Learn your voice.** It reads everything in `past-work/` and writes `voice-profile.md`. → **So do this first: drop 5–10 of your old papers/posts into the `past-work/` folder.** The more, the better; authentic-sounding ones beat heavily-edited ones.
2. **Take inventory.** It reads `current/` and fills in `progress.md` with what's outstanding and due soonest.
3. **Set up backup.** It helps you make your *own* private GitHub repo and pushes everything there, so your work is safe if your computer dies. (A browser window pops up once to authorize — that's normal.)
4. **Turn on portal access (optional).** If you want Claude to read your course portal pages, it walks you through the Claude Chrome extension. You stay logged in; you just point it at pages.

---

## Phase 3 — Daily use

### The three modes (Claude picks automatically; you can also just say which)

| You want… | Say something like… | You get… |
|---|---|---|
| **A finished assignment** (default) | *"Write my week 4 discussion post for HOL 6701"* | The complete, submission-ready draft in your voice, saved to `drafts/`. |
| **A cheat sheet for a live discussion** | *"Prep me a cheat sheet for this week's discussion in HOL 6701"* | A one-page reference saved to your Desktop folder — topic summary, key points, things to say, smart questions to ask — to keep open during the video call. |
| **To polish your own rough draft** | *"Polish this"* + paste your text | Your ideas, cleaned into your finished voice. |

### Letting Claude read your class for you (portal mode)
You don't have to download and drop in files yourself. Because the Claude Chrome extension is set up and you stay logged into your school portal, you can just point Claude at a class:

> *"Go look at my class for module 7 and do this week's project."*
> *"Check what's due in HOL 6701 this week and draft it."*

Claude opens your portal in Chrome, finds that module, reads the assignment + rubric + required readings, saves them into the right class folder, then writes the paper. You're logged in — it just navigates; if a page needs a click only you can do, it'll ask you for that one step. It never logs in as you or wanders outside your coursework.

### Where your finished work shows up
Everything you need to review lands in your **Desktop review folder** — you name it during setup (default `GW Review`) — with a clear, dated filename like `HOL6700 - Module 7 Applied Paper - 2026-06-17`. That's the *one* place to look; you never dig inside the project. (A backup copy is also kept in `drafts/`.)

### Weekly video discussions (your cheat sheet)
You have live video discussions you can't skip. Before one, ask: *"prep me a cheat sheet for this week's discussion in HOL 6701."* Claude reads the week's topic + readings (from the folder or your portal) and saves a **one-page cheat sheet to your Desktop folder** — what the topic's about, the points that'll come up, a few things you can say in your own words, and a smart question or two to ask. Open it on screen during the call and you can hold the conversation without having done all the reading. It's the one place Claude helps you *sound* prepared rather than just handing in work.

### The normal rhythm of a paper

1. Get the materials in — either drop the **assignment prompt + rubric + readings** into that class's folder under `current/` (e.g. `current/HOL-6700-human-behavior-and-learning/`), **or** use portal mode above and let Claude pull them from your course site.
2. Tell Claude what you need and the class (or module).
3. Claude reads the rubric, writes **to it**, matches the word count and **APA 7** format, and saves the finished draft to your **Desktop review folder** (plus a backup in `drafts/`).
4. It gives you a 2-sentence "what this is / what to check." You skim, tweak, submit.
5. At the end of a session it updates `progress.md` and backs everything up — without being asked.

### Reflective / personal assignments
OLL loves these. Claude doesn't know your life, so it will **ask you** for the real specifics (your job, a real example) rather than invent a fake story — fake anecdotes read hollow and can't survive a follow-up question. Just answer its questions and it writes from your real experience.

---

## How your folders work

```
past-work/     ← your old papers (Claude learns your voice from these) — kept local/private
current/       ← one folder per class: syllabus, rubric, prompts, readings
  HOL-6700-.../ HOL-6701-.../ ... (7 required core courses pre-made)
  _electives/  ← add a folder here when you enroll in an elective
drafts/        ← backup copies of finished work — kept local/private
voice-profile.md ← how you write (Claude builds + maintains this)
progress.md    ← what's done / what's due (Claude keeps current)
output-location.txt ← path to your Desktop review folder (where finished work lands for you)
CLAUDE.md      ← Claude's instructions (auto-loaded; don't edit)
```

**Your finished work doesn't live in here** — it goes to the Desktop review folder you name at setup, so you never have to open this project to find a paper.

**Each class folder has a placeholder syllabus** (the official GW course description) until you drop in the real one. When you get the real syllabus, replace the placeholder note in that folder's `README.md` and Claude will follow the real requirements.

---

## The citation rule (important)

Claude goes all-in on writing — but there is **one hard line: it never fabricates a citation, source, author, study, page number, or quote.** If a paper needs real sources it doesn't have, it tells you what to find (or asks you to drop the readings into the class folder) instead of inventing plausible-looking fakes. Made-up references are instantly checkable and the fastest way to get caught. Everything else, it just does.

---

## Writing style / format

Default for the whole OLL program is **APA 7th edition** (GSEHD's standard). If a specific professor's syllabus asks for something else, note it at the top of that class folder's `README.md` — Claude follows the syllabus over the default.

---

## Research engine (install this during setup)

Real papers need real sources, so this isn't optional. A free add-on does genuine literature search and checks every citation against real academic databases (Semantic Scholar, OpenAlex, Crossref) so nothing is hallucinated. Install it once, in your Claude Code window:

```
/plugin marketplace add Imbad0202/academic-research-skills
/plugin install academic-research-skills
```

(Then open the `/plugin` menu and turn on auto-update so it stays current.)

After it's installed, the normal flow doesn't change — you still just ask for your assignment, and the pipeline uses it to find and verify sources behind the scenes. For a big research-heavy paper you can also say *"do a full research paper on X"* to lean on it harder. Without it, Claude still researches and verifies by reading the real sources directly — the plugin just makes the database checking automatic and more thorough. (Engine by Cheng-I Wu, CC BY-NC 4.0.)

---

## Troubleshooting

- **It gave me an outline instead of a finished paper.** Say *"give me the complete finished draft, not an outline."* (Default is finished; nudge it if it hedges.)
- **It doesn't sound like me.** Make sure `past-work/` has real samples, then say *"re-read my voice-profile and past-work and rewrite to match my voice."*
- **It's quizzing me / being Socratic.** Tell it *"just write it, don't walk me through it"* — ghostwriter is the default, it shouldn't do this.
- **Something errored in the terminal.** Copy the red text, paste it to Claude, ask it to fix it. It can run the commands for you.
- **I lost my window / closed everything.** Reopen the terminal in this folder and type `claude`. Your files and history are saved.
