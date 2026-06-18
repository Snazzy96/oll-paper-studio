#!/usr/bin/env node
/**
 * autosave.cjs — commit + push any changes to GitHub, quietly.
 *
 * Wired to Claude Code Stop / SessionEnd hooks (see .claude/settings.json) so your
 * work is saved to GitHub after every turn — even if you just close the window and
 * forget to say you're done. It never blocks or interrupts the session: if nothing
 * changed it does nothing, and if the push fails (e.g. you're offline) it stays quiet
 * and the commit catches up on the next push.
 *
 * Uses execFileSync with argument arrays (no shell) so nothing is ever interpolated
 * into a shell command string.
 */
const { execFileSync } = require('child_process');

function git(args) {
  try {
    return execFileSync('git', args, { stdio: ['ignore', 'pipe', 'pipe'], timeout: 30000 }).toString();
  } catch (e) {
    return (((e && e.stdout) || '') + ((e && e.stderr) || '')).toString();
  }
}

try {
  if (git(['rev-parse', '--is-inside-work-tree']).trim() !== 'true') process.exit(0);
  if (!git(['status', '--porcelain']).trim()) process.exit(0); // nothing to save

  git(['add', '-A']);
  const stamp = new Date().toISOString().replace('T', ' ').slice(0, 16);
  git(['commit', '-m', 'autosave: ' + stamp, '--quiet']);
  git(['push', '--quiet']);
} catch (e) {
  // Never block the user over a save hiccup.
}
process.exit(0);
