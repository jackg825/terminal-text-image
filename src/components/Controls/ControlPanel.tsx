import { languages } from '@/utils/languages'
import { themeList } from '@/themes'
import { useSettingsStore } from '@/stores/settingsStore'
import type { WindowStyle, ShadowIntensity } from '@/types/settings'

// Fonts sorted A-Z (12 popular coding fonts)
const fontOptions = [
  'Anonymous Pro',
  'Cascadia Code',
  'Consolas',
  'DejaVu Sans Mono',
  'Droid Sans Mono',
  'Fira Code',
  'Hack',
  'IBM Plex Mono',
  'Inconsolata',
  'JetBrains Mono',
  'Monaco',
  'Source Code Pro',
]

const windowStyleOptions: { value: WindowStyle; label: string }[] = [
  { value: 'macos', label: 'macOS' },
  { value: 'windows', label: 'Windows' },
  { value: 'none', label: 'None' },
]

const shadowOptions: { value: ShadowIntensity; label: string }[] = [
  { value: 'none', label: 'None' },
  { value: 'light', label: 'Light' },
  { value: 'medium', label: 'Medium' },
  { value: 'heavy', label: 'Heavy' },
]

export function ControlPanel() {
  const {
    language,
    theme,
    fontSize,
    lineHeight,
    padding,
    borderRadius,
    showLineNumbers,
    windowStyle,
    showBackground,
    backgroundColor,
    shadowIntensity,
    fontFamily,
    setLanguage,
    setTheme,
    setFontSize,
    setLineHeight,
    setPadding,
    setBorderRadius,
    setShowLineNumbers,
    setWindowStyle,
    setShowBackground,
    setBackgroundColor,
    setShadowIntensity,
    setFontFamily,
  } = useSettingsStore()

  return (
    <div className="control-panel">
      <div className="control-group">
        <label className="control-label">Language</label>
        <select
          className="control-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">Theme</label>
        <select
          className="control-select"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themeList.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">Font</label>
        <select
          className="control-select"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          {fontOptions.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">Font Size: {fontSize}px</label>
        <input
          type="range"
          className="control-slider"
          min={10}
          max={24}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label className="control-label">Line Height: {lineHeight}</label>
        <input
          type="range"
          className="control-slider"
          min={1}
          max={2}
          step={0.1}
          value={lineHeight}
          onChange={(e) => setLineHeight(Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label className="control-label">Padding: {padding}px</label>
        <input
          type="range"
          className="control-slider"
          min={16}
          max={64}
          value={padding}
          onChange={(e) => setPadding(Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label className="control-label">Border Radius: {borderRadius}px</label>
        <input
          type="range"
          className="control-slider"
          min={0}
          max={24}
          value={borderRadius}
          onChange={(e) => setBorderRadius(Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label className="control-label">Window Style</label>
        <select
          className="control-select"
          value={windowStyle}
          onChange={(e) => setWindowStyle(e.target.value as WindowStyle)}
        >
          {windowStyleOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label className="control-toggle">
          <input
            type="checkbox"
            checked={showLineNumbers}
            onChange={(e) => setShowLineNumbers(e.target.checked)}
          />
          <span>Show Line Numbers</span>
        </label>
      </div>

      <div className="control-group">
        <label className="control-toggle">
          <input
            type="checkbox"
            checked={showBackground}
            onChange={(e) => setShowBackground(e.target.checked)}
          />
          <span>Show Background</span>
        </label>
      </div>

      {showBackground && (
        <>
          <div className="control-group">
            <label className="control-label">Background Color</label>
            <div className="color-picker-wrapper">
              <input
                type="color"
                className="control-color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
              <input
                type="text"
                className="control-input color-text"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>
          </div>

          <div className="control-group">
            <label className="control-label">Shadow</label>
            <select
              className="control-select"
              value={shadowIntensity}
              onChange={(e) => setShadowIntensity(e.target.value as ShadowIntensity)}
            >
              {shadowOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  )
}
