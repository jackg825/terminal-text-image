# Project guidance

## Editing and export contracts

- Code Canvas is a Vite/React client application. `vite.config.ts` maps `@` to `src`; build output is `dist/`.
- `src/stores/settingsStore.ts` uses Zustand persistence and selective `partialize`. Preserve its storage key and preference fields; source code and terminal title are intentionally not persisted. Reuse atomic and shallow grouped selectors.
- Preserve DOMPurify sanitization of Shiki HTML in `src/components/Preview/CodeDisplay.tsx`, including when changing inline editing or syntax highlighting.
- PNG/SVG/clipboard export is implemented in `src/utils/exportImage.ts` and `src/hooks/useExport.ts`. Preserve requested scale, background handling, and cleanup of the temporary `exporting` class even on failure. Check that editing controls do not appear in exported images.

## Development and checks

Use `npm ci` with the committed lockfile. `npm run dev` starts Vite; `npm run build` runs `tsc -b` followed by `vite build`; `npm run preview` serves the build locally. For source changes run the build and exercise the affected preview/edit/export behavior, including persisted preferences when relevant. Do not hand-edit `dist/`.

`npm run lint` is declared as `eslint .`, but this snapshot has no tracked ESLint configuration. Report that gap rather than claiming lint is configured or adding a policy as part of an unrelated change. There is no automated test script. Read package/config files for current framework versions instead of relying on historical stack descriptions.
