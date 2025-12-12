# Terminal Text Image

A frontend tool for converting code/text into beautiful terminal-style images, similar to carbon.now.sh and ray.so.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite 6
- **Syntax Highlighting**: Shiki (VS Code quality)
- **Image Export**: html-to-image
- **State**: Zustand with localStorage persistence

## Project Structure

```
src/
├── components/
│   ├── CodeInput/       # Inline code editor
│   ├── Controls/        # Settings panel
│   ├── Export/          # PNG/SVG export buttons
│   └── Preview/         # Terminal preview with window chrome
├── hooks/
│   ├── useShiki.ts      # Shiki highlighter initialization
│   └── useExport.ts     # Image export logic
├── stores/
│   └── settingsStore.ts # Zustand state (persisted)
├── themes/
│   └── index.ts         # 20 Shiki theme definitions
└── utils/
    ├── languages.ts     # 65 languages + auto-detect
    └── exportImage.ts   # Export utilities
```

## Commands

```bash
npm install     # Install dependencies
npm run dev     # Start dev server (localhost:5173)
npm run build   # Production build to dist/
npm run preview # Preview production build
```

## Key Features

- 65 programming languages with auto-detection
- 20 themes (Shiki built-in)
- 12 coding fonts
- macOS/Windows/None window styles
- Inline code editing in preview
- Editable terminal title
- PNG (2x/3x) and SVG export
