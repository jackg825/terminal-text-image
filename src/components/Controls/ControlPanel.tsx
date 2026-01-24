import { memo } from 'react'
import { useShowBackground } from '@/stores/settingsStore'
import { LanguageControl } from './LanguageControl'
import { ThemeControl } from './ThemeControl'
import { FontControl } from './FontControl'
import {
  FontSizeControl,
  LineHeightControl,
  PaddingControl,
  BorderRadiusControl,
} from './SizeControls'
import { WindowStyleControl, LineNumbersControl } from './WindowControls'
import {
  ShowBackgroundControl,
  BackgroundColorControl,
  ShadowControl,
} from './BackgroundControls'
import { VisualEffectControl, EffectColorControl } from './EffectControls'

// Memoized wrapper for conditional background controls
const BackgroundSettings = memo(function BackgroundSettings() {
  const showBackground = useShowBackground()

  if (!showBackground) {
    return null
  }

  return (
    <>
      <BackgroundColorControl />
      <ShadowControl />
      <VisualEffectControl />
      <EffectColorControl />
    </>
  )
})

export const ControlPanel = memo(function ControlPanel() {
  return (
    <div className="control-panel">
      <LanguageControl />
      <ThemeControl />
      <FontControl />
      <FontSizeControl />
      <LineHeightControl />
      <PaddingControl />
      <BorderRadiusControl />
      <WindowStyleControl />
      <LineNumbersControl />
      <ShowBackgroundControl />
      <BackgroundSettings />
    </div>
  )
})
