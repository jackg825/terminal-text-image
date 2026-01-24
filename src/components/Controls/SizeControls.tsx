import { memo } from 'react'
import {
  useFontSize,
  useSetFontSize,
  useLineHeight,
  useSetLineHeight,
  usePadding,
  useSetPadding,
  useBorderRadius,
  useSetBorderRadius,
} from '@/stores/settingsStore'

export const FontSizeControl = memo(function FontSizeControl() {
  const fontSize = useFontSize()
  const setFontSize = useSetFontSize()

  return (
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
  )
})

export const LineHeightControl = memo(function LineHeightControl() {
  const lineHeight = useLineHeight()
  const setLineHeight = useSetLineHeight()

  return (
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
  )
})

export const PaddingControl = memo(function PaddingControl() {
  const padding = usePadding()
  const setPadding = useSetPadding()

  return (
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
  )
})

export const BorderRadiusControl = memo(function BorderRadiusControl() {
  const borderRadius = useBorderRadius()
  const setBorderRadius = useSetBorderRadius()

  return (
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
  )
})
