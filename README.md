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

## The one firm rule

Claude will write your coursework, in your voice, all-in — **but it will never invent a citation, source, or quote.** Fake references are the fastest way to get flagged, so if a paper needs real sources it doesn't have, it tells you what to go find instead of making them up. That's the deal, and it's there to protect you.

---

<sub>Built for a friend in the GW OLL program. Optional power-up for heavy research papers: the [`academic-research-skills`](https://github.com/Imbad0202/academic-research-skills) Claude Code plugin (CC BY-NC 4.0, by Cheng-I Wu) adds automated citation verification against Semantic Scholar/OpenAlex/Crossref. See `GETTING-STARTED.md` → "Optional power-up."</sub>
