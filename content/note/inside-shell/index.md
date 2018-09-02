---
title: 'inside shell'
date: '2018-08-31T17:08:12Z'
---
which foo >/dev/null
command -v foo >/dev/null 2>&1
type foo >/dev/null 2>&1
hash foo 2>/dev/null

if [[ -n "${commands[perlbrew]}" ]] ; then
  ...
fi


http://hyperpolyglot.org/unix-shells