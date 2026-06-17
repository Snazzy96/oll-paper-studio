# GW OLL Paper Studio

A ready-to-go workspace that turns Claude Code into your **personal coursework assistant** for George Washington University's **Organizational Leadership & Learning (OLL)** master's program. It writes complete, submission-ready coursework **in your own voice**, keeps your classes and materials organized, and never fakes a citation.

> **You don't need to be technical.** If you've never used a terminal, that's fine — the setup literally coaches you through it one step at a time.

---

## Start here (3 phases)

**Phase 1 — Get Claude Code running (one time, ~15 min).**
Open `START.md`, follow what it says. (Short version: open [claude.ai](https://claude.ai) in your browser, start a new chat, attach `START.md`, hit send — it walks you through installing everything on your Windows PC, one step at a time.)

**Phase 2 — Open this folder in Claude Code and finish setup.**
Once Claude Code is running *inside this folder*, type exactly this and press Enter:

```
finish my setup
```

Claude will then: learn your writing voice from your past papers, take inventory of what's due, and set up automatic backup — walking you through each part.

**Phase 3 — Use it.**
Drop an assignment prompt into the right class folder and say what you need (e.g. *"write my week 3 discussion post for HOL 6700"*). You get a finished draft in your voice. Full details in **`GETTING-STARTED.md`**.

---

## What's in here

| Item | What it is |
|---|---|
| `START.md` | The install coach. Attach it to a claude.ai chat to get Claude Code onto your computer. |
| `GETTING-STARTED.md` | **Your manual.** How to use this day-to-day — modes, examples, troubleshooting. |
| `CLAUDE.md` | Claude's operating instructions (it reads this automatically every session). You don't need to touch it. |
| `Fable-Mode-Playbook-portable.md` | The quality standard Claude operates by (grounding, self-checking). |
| `past-work/` | Drop your old papers here so Claude learns to write like you. |
| `current/` | One folder per class — put each class's syllabus, prompts, rubrics, and readings here. |
| `drafts/` | Where Claude saves your finished, ready-to-submit work. |
| `voice-profile.md` | Claude builds this from `past-work/` — the fingerprint of how you write. |
| `progress.md` | Running list of what's done and what's due. Claude keeps it current. |

---

## Real research, real sources

This isn't an AI making things up. The pipeline **does real research** — it pulls your assigned readings and searches actual scholarly literature (Google Scholar, Semantic Scholar, OpenAlex), then **verifies every citation against a real database** before it goes in your paper. It will **never invent a citation, source, or quote** — fake references are the fastest way to get flagged. If a paper needs sources it can't find or verify, it tells you what to look for instead of faking it. That's the deal, and it's there to protect you.

---

<sub>Built for a friend in the GW OLL program. Recommended research engine: the [`academic-research-skills`](https://github.com/Imbad0202/academic-research-skills) Claude Code plugin (CC BY-NC 4.0, by Cheng-I Wu) does real literature search + verifies citations against Semantic Scholar / OpenAlex / Crossref. Install it during setup — see `GETTING-STARTED.md` → "Research engine."</sub>
