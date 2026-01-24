import { memo } from 'react'
import { themeList } from '@/themes'
import { useTheme, useSetTheme } from '@/stores/settingsStore'

export const ThemeControl = memo(function ThemeControl() {
  const theme = useTheme()
  const setTheme = useSetTheme()

  return (
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
  )
})
