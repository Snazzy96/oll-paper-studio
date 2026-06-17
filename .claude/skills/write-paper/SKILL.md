---
name: write-paper
description: Use when writing, drafting, or "knocking out" any coursework assignment — a paper, essay, discussion post, reflection, applied project, or response for a class. Reads that class's syllabus, rubric, assignment prompt, and assigned readings; drafts sections in parallel with subagents; stitches them; then runs voice / rubric / citation / format review passes to produce a finished, submission-ready draft in the student's own voice. APA 7 is the default format. Triggers on requests like "write my week 4 discussion post for HOL 6700", "draft my paper for adult learning", "do this assignment".
---

# write-paper — the section-agent → stitch → review pipeline

This is the engine behind Ghostwriter mode. The goal is a **finished, submission-ready draft in the student's own voice** that hits the rubric and never contains a fabricated source. Read `CLAUDE.md` (voice + the firm citation line) before running this — those rules are absolute and override anything here.

Use real subagents (the Task tool) for the parallel drafting and the review passes. Drafting many sections in one context produces flat, same-shaped prose; separate agents per section, then a unifying pass, is what makes it read like a person wrote it.

---

## Phase 0 — Intake & plan (gather everything, then plan to the rubric)

1. **Get the materials — from the folder, or pull them from the portal.** From what the user names (e.g. "HOL 6700", "module 7", "adult learning", "this week's project"), open the matching folder under `current/`. **If the prompt / rubric / readings aren't already there and the user has pointed you at their course portal, use the Chrome browser tools to read the portal:** open the course, find the module/week the user named, and read + save the assignment prompt, rubric, and required readings into that `current/<class>/` folder before continuing. The user is logged into the portal themselves — navigate for them, and if a page won't load or needs a click, ask them to do that one step. Confirm in a line what you found ("Module 7: 4-page applied paper, APA, due Sun; pulled the prompt + 3 readings"). Then read, in this order:
   - the **syllabus** (format required, due date, any instructor-specific rules — these override the APA-7 default),
   - the **assignment prompt / discussion question**,
   - the **rubric** (if present),
   - the **assigned readings** for the relevant week (these are your source pool).
2. **Read `voice-profile.md`** (the ban list, voice fingerprint, and verbatim anchors). If it's missing or empty, stop and ask the user to drop past papers into `past-work/` so the voice can be built first.
3. **Extract the spec:** deliverable type, exact word/page count, required format, and the list of **rubric criteria** every part must satisfy.
   - **Required-inputs gate — check before drafting.** List what the assignment *requires* that only the student can supply: assessment results, specific personal data or metrics, a particular case/organization, a chosen artifact. If a required input is missing, **STOP and ask the student for it.** Do not substitute, approximate, or quietly work around a *required* deliverable (e.g., don't write a self-described leadership profile when the rubric requires results from named self-assessments) — that's an automatic point-loss and the single most common way these papers lose a letter grade. Optional color you can gather as you go; *required* inputs gate the whole paper.
4. **Research for real — build a verified source pool.** This is central, not a formality. Assemble sources in this order:
   - the **assigned readings** in the class folder (use these first),
   - **real scholarly literature you find by searching** — Google Scholar, Semantic Scholar, OpenAlex, Crossref, journal pages (use WebSearch/WebFetch; if the `academic-research-skills` plugin is installed, use its research + verification engine). Pull actual papers with real authors, years, and DOIs.
   - For each candidate source, **read enough to confirm it's real and that it says what you'll claim it says.** Record it in the source pool only once verified.
   - If the assignment needs sources you can't find or verify, say so now and tell the user what to look for (or to drop readings in) — **never plan to invent a source.** No claim gets drafted on an unverified citation.
   - **Match source breadth to the assignment.** If the prompt or rubric calls for multiple theories, frameworks, or perspectives, gather sources covering that full range — map each required theory/criterion to at least one real source before drafting. A typical 5-page graduate paper wants roughly **8–12 solid sources spanning the required concepts**, not 5–6 clustered on one idea. A narrow cluster reads thin and caps the grade in the B range no matter how clean the prose.
   - **Scale to the stated length.** A 15–20 page paper or literature review needs proportionally more — roughly **15–25 sources**, more sections, and deeper treatment per point. Hitting the assignment's *actual* page/word count is a graded requirement; plan the section count and source count up front to reach it honestly (never pad to length). **Coming in under length is one of the largest single point-losses** — a strong short paper still gets marked down hard against a 15-page requirement.
   - **For case-based papers, source the cases too.** If the paper analyzes specific real cases (companies, events, programs), gather sources that document *those cases* (reputable reporting, books, published case studies), not only the theory. Uncited case facts — even accurate ones — lose points and read as unsupported in a research paper.
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

- **Voice harmonizer (rewriter, one pass).** Read the whole stitched draft and rewrite it into a *single* consistent voice matching `voice-profile.md`. Erase the seams between sections, vary sentence structure, kill every banned phrase/AI tell, and remove robotic balance. **Dedup hard:** no anecdote, example, or framing line gets restated more than once — state it once, reference it lightly afterward. **Watch over-stylization — it reads as AI to detectors:** don't let clipped "Not X. Y." fragments or one-line aphoristic closers become a tic; real writing varies cadence and doesn't end every section on a mic-drop. **And avoid the "too clean" tell:** uniform sentence rhythm, perfectly even section depth, and a flawless citation on every single claim all read as machine-made. Real student work has friction — allow measured hedging where the uncertainty is genuine ("the evidence here is mixed," "it's not fully clear whether"), let some paragraphs run longer or rougher than others, and don't force a citation onto every sentence. Polished-but-uniform is itself a detector signal. This is the pass that makes separate-agent sections read as one person. Note what you changed (don't silently skip it).
- **Humanizing tactics (do these explicitly — they're what separates "authored" from "machine-assisted," confirmed by both tough graders and an outside-model review):**
  1. **Judgment-first, not framework-first.** Lead a paragraph with the author's own claim, then bring the citation in *support* — don't define a theory and then map the case onto it every time. (Before: "An organizational justice lens clarifies whose fairness claims are violated…" After: "The unfairness is not evenly distributed. The company keeps the upside; residents absorb the risk. Colquitt's (2001) justice framework names that imbalance.")
  2. **Vary paragraph shape.** Not every paragraph should be topic-sentence → citation → application → balanced closer. Some short, some that open on a concrete detail, some that wander before landing.
  3. **One or two moments of genuine first-person wrestling** where the genre allows ("this is the part I find hardest"), not memoir — just evidence of a mind making a call.
  4. **Vary the concession structure.** Don't end paragraph after paragraph on "X is real, but Y outweighs it." Uniform hedging is itself a tell.
  5. **Keep concrete detail alive throughout**, not only in the intro. Reuse the specifics (names, numbers, the actual incident) instead of collapsing to abstractions like "the report" or "resident safety."
  6. **Let citation cadence be uneven**, and include at least one real moment of friction with a source ("this framework helps, but it misses…").
- **Rubric auditor.** Check every rubric criterion is actually addressed; return a list of any gaps. Also judge **depth**: top marks need genuine synthesis and a real *agree-and-disagree* with the literature, not just competent coverage — flag any section that's merely adequate and say what would deepen it.
- **Citation verifier.** For every in-text citation: confirm it maps to a **real** source from the provided pool and that the source actually supports the claim (not just that it exists). Flag any citation that's fabricated, unsupported, or that you're **unable to verify** ("unable to verify" is a valid, expected output — never bluff). Check the reference list is correct APA 7 (or syllabus format).
- **Format & length check.** Word/page count met; required structure/headings present; APA 7 mechanics (title page, in-text, references) or the syllabus's format.

## Phase 4 — Fix pass (bounded: one round)

Apply the review findings. If a gap needs the user (a missing source, a personal example only they have), stop and ask for that one thing rather than papering over it. Don't loop endlessly — one fix round, then surface anything still open.

## Phase 5 — Deliver

- **Produce the right format for how it's submitted.** For an uploaded paper, generate a proper **APA 7 `.docx`** — title page, Times New Roman 12, double-spaced, page numbers, hanging-indent references — by running `scripts/make_docx.py` (see SETUP; needs `python-docx`). For a discussion-board post pasted into a text box, plain markdown is fine. Never hand over a raw `.md` when the professor expects a Word doc.
- **Include required front matter.** If the assignment requires an **abstract** (or keywords, an executive summary, a title page with specific fields), write it. The `.docx` generator adds a title page but not an abstract — add the abstract text yourself when required.
- Save the finished draft to `drafts/` with a clear name (e.g. `hol6700-week4-discussion-post.md`), **and copy the final version to the user's Desktop review folder** — the path recorded at setup in `output-location.txt` (default: a `GW Review` folder on their Desktop). That Desktop folder is where the user actually looks; the finished work must land there, not only inside the repo. Tell them the filename and exactly where it is.
- Give the user a **2-sentence "what this is / what to check."**
- Surface any flags plainly: missing sources, spots that need their real experience, any citation you couldn't verify, or a rubric criterion you couldn't fully hit.
- Update `progress.md` (mark this assignment drafted). At session end, commit + push.

---

## The done-gate (don't call it finished until all true)
- [ ] Every **required input** supplied — no required deliverable substituted or worked around
- [ ] Every rubric criterion addressed, with real depth (synthesis + agree-and-disagree, not just coverage)
- [ ] Source breadth matches the assignment (not a narrow cluster)
- [ ] Word/page count met
- [ ] Delivered in the right format (APA `.docx` for an uploaded paper; text is fine for a discussion box)
- [ ] APA 7 correct (or the syllabus's required format)
- [ ] Reads in the student's voice — harmonizer ran, AI tells gone (incl. over-clipped fragments / aphoristic closers), checked against `voice-profile.md`
- [ ] Every citation real and supports its claim — zero fabricated or unverifiable sources left unflagged
- [ ] Saved to `drafts/` **and copied to the Desktop review folder**, with the 2-line summary + any open flags surfaced

## Hard rules (from CLAUDE.md — non-negotiable)
- Never fabricate a citation, source, author, study, page number, or quote.
- Never invent personal anecdotes — ask the user for real specifics.
- Deliver the finished thing, not an outline. Don't quiz or Socratically coach unless asked.
- Don't moralize or hedge with disclaimers — the user has made their call.
