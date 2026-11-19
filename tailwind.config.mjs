// Tailwind CSS v4 migration note:
//
// The Tailwind v3 configuration that used to live in this file has been
// migrated, value-for-value, to src/styles/global.css (@theme / @plugin /
// @utility) and the build now uses the official @tailwindcss/vite plugin
// (see astro.config.mjs). Tailwind v4 does not load this file unless it is
// explicitly referenced with an `@config` directive, which global.css does
// not do, so this stub is inert and there is no duplicate definition.
//
// This file is kept only because the GitHub snapshot push used for this PR
// cannot delete files. It can safely be deleted in a normal git checkout:
//   git rm tailwind.config.mjs
export default {};
