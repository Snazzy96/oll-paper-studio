---
name: write-paper
description: Use when writing, drafting, or "knocking out" any coursework assignment — a paper, essay, discussion post, reflection, applied project, or response for a class. Reads that class's syllabus, rubric, assignment prompt, and assigned readings; drafts sections in parallel with subagents; stitches them; then runs voice / rubric / citation / format review passes to produce a finished, submission-ready draft in the student's own voice. APA 7 is the default format. Triggers on requests like "write my week 4 discussion post for HOL 6700", "draft my paper for adult learning", "do this assignment".
---

# write-paper — the section-agent → stitch → review pipeline

This is the engine behind Ghostwriter mode. The goal is a **finished, submission-ready draft in the student's own voice** that hits the rubric and never contains a fabricated source. Read `CLAUDE.md` (voice + the firm citation line) before running this — those rules are absolute and override anything here.

Use real subagents (the Task tool) for the parallel drafting and the review passes. Drafting many sections in one context produces flat, same-shaped prose; separate agents per section, then a unifying pass, is what makes it read like a person wrote it.

---

## Phase 0 — Intake & plan (gather everything, then plan to the rubric)

1. **Locate the class folder.** From what the user names (e.g. "HOL 6700", "adult learning"), open the matching folder under `current/`. Read, in this order:
   - the **syllabus** (format required, due date, any instructor-specific rules — these override the APA-7 default),
   - the **assignment prompt / discussion question**,
   - the **rubric** (if present),
   - the **assigned readings** for the relevant week (these are your source pool).
2. **Read `voice-profile.md`** (the ban list, voice fingerprint, and verbatim anchors). If it's missing or empty, stop and ask the user to drop past papers into `past-work/` so the voice can be built first.
3. **Extract the spec:** deliverable type, exact word/page count, required format, and the list of **rubric criteria** every part must satisfy.
4. **Research for real — build a verified source pool.** This is central, not a formality. Assemble sources in this order:
   - the **assigned readings** in the class folder (use these first),
   - **real scholarly literature you find by searching** — Google Scholar, Semantic Scholar, OpenAlex, Crossref, journal pages (use WebSearch/WebFetch; if the `academic-research-skills` plugin is installed, use its research + verification engine). Pull actual papers with real authors, years, and DOIs.
   - For each candidate source, **read enough to confirm it's real and that it says what you'll claim it says.** Record it in the source pool only once verified.
   - If the assignment needs sources you can't find or verify, say so now and tell the user what to look for (or to drop readings in) — **never plan to invent a source.** No claim gets drafted on an unverified citation.
5. **Plan sections** mapped to the rubric: a short outline where each section names the rubric criteria it covers and which real sources it will draw on. For a short discussion post this may be 2–3 sections; for a paper, more.
6. **Reflective/personal content:** if the prompt asks for personal experience (common in OLL), ask the user for the real specifics now (their job, a real example) — never invent anecdotes.
7. **One quick confirm, then go.** Show the plan in a few lines and proceed unless the user objects. Do not turn this into a Socratic back-and-forth — the user wants it done.

## Phase 1 — Draft sections in parallel (one subagent per section)

Spawn **one subagent per section** concurrently. Give each subagent:
- its section's purpose and target length,
- the exact **rubric criteria** it must satisfy,
- only the **real sources** relevant to it (quote/paraphrase only from these; cite in APA 7 or the syllabus format),
- the **`voice-profile.md`** content (ban list first, then fingerprint + anchors), with the instruction to write in this voice and avoid every AI tell,
- the rule: **never fabricate a citation** — if a needed source isn't in the provided set, write the prose and flag the gap rather than inventing a reference.

Each subagent returns: its drafted section + the list of sources it actually cited (so the citation pass can verify them).

## Phase 2 — Stitch

Assemble the sections in outline order into one document. Don't smooth yet — that's the next pass.

## Phase 3 — Review passes (run these as separate subagents; they can run in parallel)

- **Voice harmonizer (rewriter, one pass).** Read the whole stitched draft and rewrite it into a *single* consistent voice matching `voice-profile.md`. Erase the seams between sections, vary sentence structure, kill every banned phrase/AI tell, and remove robotic balance. This is the pass that makes separate-agent sections read as one person. Note what you changed (don't silently skip it).
- **Rubric auditor.** Check every rubric criterion is actually addressed; return a list of any gaps.
- **Citation verifier.** For every in-text citation: confirm it maps to a **real** source from the provided pool and that the source actually supports the claim (not just that it exists). Flag any citation that's fabricated, unsupported, or that you're **unable to verify** ("unable to verify" is a valid, expected output — never bluff). Check the reference list is correct APA 7 (or syllabus format).
- **Format & length check.** Word/page count met; required structure/headings present; APA 7 mechanics (title page, in-text, references) or the syllabus's format.

## Phase 4 — Fix pass (bounded: one round)

Apply the review findings. If a gap needs the user (a missing source, a personal example only they have), stop and ask for that one thing rather than papering over it. Don't loop endlessly — one fix round, then surface anything still open.

## Phase 5 — Deliver

- Save the finished draft to `drafts/` with a clear name (e.g. `hol6700-week4-discussion-post.md`).
- Give the user a **2-sentence "what this is / what to check."**
- Surface any flags plainly: missing sources, spots that need their real experience, any citation you couldn't verify, or a rubric criterion you couldn't fully hit.
- Update `progress.md` (mark this assignment drafted). At session end, commit + push.

---

## The done-gate (don't call it finished until all true)
- [ ] Every rubric criterion addressed
- [ ] Word/page count met
- [ ] APA 7 correct (or the syllabus's required format)
- [ ] Reads in the student's voice — voice harmonizer ran, AI tells gone, checked against `voice-profile.md`
- [ ] Every citation real and supports its claim — zero fabricated or unverifiable sources left unflagged
- [ ] Saved to `drafts/`, with the 2-line summary + any open flags surfaced

## Hard rules (from CLAUDE.md — non-negotiable)
- Never fabricate a citation, source, author, study, page number, or quote.
- Never invent personal anecdotes — ask the user for real specifics.
- Deliver the finished thing, not an outline. Don't quiz or Socratically coach unless asked.
- Don't moralize or hedge with disclaimers — the user has made their call.
