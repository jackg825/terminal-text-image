import { memo } from 'react'
import {
  useWindowStyle,
  useSetWindowStyle,
  useShowLineNumbers,
  useSetShowLineNumbers,
} from '@/stores/settingsStore'
import type { WindowStyle } from '@/types/settings'

const windowStyleOptions: { value: WindowStyle; label: string }[] = [
  { value: 'macos', label: 'macOS' },
  { value: 'windows', label: 'Windows' },
  { value: 'none', label: 'None' },
]

export const WindowStyleControl = memo(function WindowStyleControl() {
  const windowStyle = useWindowStyle()
  const setWindowStyle = useSetWindowStyle()

  return (
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
  )
})

export const LineNumbersControl = memo(function LineNumbersControl() {
  const showLineNumbers = useShowLineNumbers()
  const setShowLineNumbers = useSetShowLineNumbers()

  return (
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
  )
})
