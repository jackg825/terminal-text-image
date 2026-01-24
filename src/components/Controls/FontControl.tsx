import { memo } from 'react'
import { useFontFamily, useSetFontFamily } from '@/stores/settingsStore'

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

export const FontControl = memo(function FontControl() {
  const fontFamily = useFontFamily()
  const setFontFamily = useSetFontFamily()

  return (
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
  )
})
