import { memo } from 'react'
import { EFFECT_OPTIONS, getEffectColor } from '@/styles/effects'
import {
  useVisualEffect,
  useSetVisualEffect,
  useEffectColor,
  useSetEffectColor,
} from '@/stores/settingsStore'
import type { VisualEffect } from '@/types/settings'

export const VisualEffectControl = memo(function VisualEffectControl() {
  const visualEffect = useVisualEffect()
  const setVisualEffect = useSetVisualEffect()
  const setEffectColor = useSetEffectColor()

  return (
    <div className="control-group">
      <label className="control-label">Visual Effect</label>
      <select
        className="control-select"
        value={visualEffect}
        onChange={(e) => {
          setVisualEffect(e.target.value as VisualEffect)
          setEffectColor('') // Reset to preset when changing effect
        }}
      >
        {EFFECT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
})

export const EffectColorControl = memo(function EffectColorControl() {
  const visualEffect = useVisualEffect()
  const effectColor = useEffectColor()
  const setEffectColor = useSetEffectColor()

  const activeEffectColor = getEffectColor(visualEffect, effectColor)
  const presetColor = EFFECT_OPTIONS.find((e) => e.value === visualEffect)?.color || ''

  if (visualEffect === 'none') {
    return null
  }

  return (
    <div className="control-group">
      <label className="control-label">
        Effect Color
        {effectColor && (
          <button
            onClick={() => setEffectColor('')}
            style={{
              marginLeft: '8px',
              fontSize: '0.6rem',
              color: 'var(--color-accent-primary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Reset to preset
          </button>
        )}
      </label>
      <div className="color-picker-wrapper">
        <input
          type="color"
          className="control-color"
          value={activeEffectColor}
          onChange={(e) => setEffectColor(e.target.value)}
        />
        <input
          type="text"
          className="control-input color-text"
          value={effectColor || presetColor}
          placeholder={presetColor}
          onChange={(e) => setEffectColor(e.target.value)}
        />
        {!effectColor && (
          <span
            style={{
              fontSize: '0.65rem',
              color: 'var(--color-text-tertiary)',
              whiteSpace: 'nowrap',
            }}
          >
            (preset)
          </span>
        )}
      </div>
    </div>
  )
})
