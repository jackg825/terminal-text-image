import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Settings, WindowStyle, ShadowIntensity, VisualEffect } from '@/types/settings'
import { DEFAULT_CODE } from '@/types/settings'

interface SettingsStore extends Settings {
  setCode: (code: string) => void
  setLanguage: (language: string) => void
  setTheme: (theme: string) => void
  setFontSize: (size: number) => void
  setLineHeight: (height: number) => void
  setPadding: (padding: number) => void
  setBorderRadius: (radius: number) => void
  setShowLineNumbers: (show: boolean) => void
  setWindowStyle: (style: WindowStyle) => void
  setShowBackground: (show: boolean) => void
  setBackgroundColor: (color: string) => void
  setShadowIntensity: (intensity: ShadowIntensity) => void
  setFontFamily: (font: string) => void
  setTabTitle: (title: string) => void
  setVisualEffect: (effect: VisualEffect) => void
  setEffectColor: (color: string) => void
  reset: () => void
}

const defaultSettings: Settings = {
  code: DEFAULT_CODE,
  language: 'typescript',
  theme: 'dracula',
  fontSize: 14,
  lineHeight: 1.5,
  padding: 32,
  borderRadius: 12,
  showLineNumbers: false,
  windowStyle: 'macos',
  showBackground: true,
  backgroundColor: '#1a1a2e',
  shadowIntensity: 'medium',
  fontFamily: 'JetBrains Mono',
  tabTitle: 'terminal',
  visualEffect: 'none',
  effectColor: '',
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      ...defaultSettings,
      setCode: (code) => set({ code }),
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setLineHeight: (lineHeight) => set({ lineHeight }),
      setPadding: (padding) => set({ padding }),
      setBorderRadius: (borderRadius) => set({ borderRadius }),
      setShowLineNumbers: (showLineNumbers) => set({ showLineNumbers }),
      setWindowStyle: (windowStyle) => set({ windowStyle }),
      setShowBackground: (showBackground) => set({ showBackground }),
      setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
      setShadowIntensity: (shadowIntensity) => set({ shadowIntensity }),
      setFontFamily: (fontFamily) => set({ fontFamily }),
      setTabTitle: (tabTitle) => set({ tabTitle }),
      setVisualEffect: (visualEffect) => set({ visualEffect }),
      setEffectColor: (effectColor) => set({ effectColor }),
      reset: () => set(defaultSettings),
    }),
    {
      name: 'terminal-text-image-settings',
      partialize: (state) => ({
        language: state.language,
        theme: state.theme,
        fontSize: state.fontSize,
        lineHeight: state.lineHeight,
        padding: state.padding,
        borderRadius: state.borderRadius,
        showLineNumbers: state.showLineNumbers,
        windowStyle: state.windowStyle,
        showBackground: state.showBackground,
        backgroundColor: state.backgroundColor,
        shadowIntensity: state.shadowIntensity,
        fontFamily: state.fontFamily,
        visualEffect: state.visualEffect,
        effectColor: state.effectColor,
      }),
    }
  )
)
