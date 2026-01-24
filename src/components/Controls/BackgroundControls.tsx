import { memo } from 'react'
import {
  useShowBackground,
  useSetShowBackground,
  useBackgroundColor,
  useSetBackgroundColor,
  useShadowIntensity,
  useSetShadowIntensity,
  useVisualEffect,
} from '@/stores/settingsStore'
import type { ShadowIntensity } from '@/types/settings'

const shadowOptions: { value: ShadowIntensity; label: string }[] = [
  { value: 'none', label: 'None' },
  { value: 'light', label: 'Light' },
  { value: 'medium', label: 'Medium' },
  { value: 'heavy', label: 'Heavy' },
]

export const ShowBackgroundControl = memo(function ShowBackgroundControl() {
  const showBackground = useShowBackground()
  const setShowBackground = useSetShowBackground()

  return (
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
  )
})

export const BackgroundColorControl = memo(function BackgroundColorControl() {
  const backgroundColor = useBackgroundColor()
  const setBackgroundColor = useSetBackgroundColor()

  return (
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
  )
})

export const ShadowControl = memo(function ShadowControl() {
  const shadowIntensity = useShadowIntensity()
  const setShadowIntensity = useSetShadowIntensity()
  const visualEffect = useVisualEffect()

  return (
    <div className="control-group">
      <label className="control-label">Shadow</label>
      <select
        className="control-select"
        value={shadowIntensity}
        onChange={(e) => setShadowIntensity(e.target.value as ShadowIntensity)}
        disabled={visualEffect !== 'none'}
        style={{ opacity: visualEffect !== 'none' ? 0.5 : 1 }}
      >
        {shadowOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
})
