#!/usr/bin/env bash
# PreToolUse(Bash) guard: if a destructive scaffolding command runs while there
# are uncommitted git changes, ask for confirmation first — a create-vite
# --overwrite once wiped .claude/skills. See memory: scaffold-overwrite-incident.
input=$(cat)
cmd=$(printf '%s' "$input" | sed -n 's/.*"command"[[:space:]]*:[[:space:]]*"\(\([^"\]\|\.\)*\)".*/\1/p')

# Destructive scaffolders / flags worth guarding
if printf '%s' "$cmd" | grep -qiE 'create-vite|(npm|yarn|pnpm|bun)[[:space:]]+create|degit|--overwrite|--force([[:space:]]|$)|[[:space:]]-f([[:space:]]|$)'; then
  if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
    printf '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"ask","permissionDecisionReason":"Scaffolder/comando destrutivo (create / --overwrite / --force) com mudancas git NAO commitadas. Isso ja apagou .claude/skills antes. Faca commit primeiro, ou confirme se tem certeza."}}\n'
    exit 0
  fi
fi
exit 0
