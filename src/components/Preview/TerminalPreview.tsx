import { forwardRef } from 'react'
import { WindowChrome } from './WindowChrome'
import { CodeDisplay } from './CodeDisplay'
import { useShiki } from '@/hooks/useShiki'
import { getTheme } from '@/themes'
import type { WindowStyle, ShadowIntensity } from '@/types/settings'

interface TerminalPreviewProps {
  code: string
  language: string
  themeId: string
  fontSize: number
  lineHeight: number
  padding: number
  borderRadius: number
  showLineNumbers: boolean
  windowStyle: WindowStyle
  showBackground: boolean
  backgroundColor: string
  shadowIntensity: ShadowIntensity
  fontFamily: string
  tabTitle: string
  onCodeChange?: (code: string) => void
  onTitleChange?: (title: string) => void
}

const shadowStyles: Record<ShadowIntensity, string> = {
  none: 'none',
  light: '0 4px 12px rgba(0, 0, 0, 0.15)',
  medium: '0 8px 30px rgba(0, 0, 0, 0.3)',
  heavy: '0 20px 60px rgba(0, 0, 0, 0.5)',
}

export const TerminalPreview = forwardRef<HTMLDivElement, TerminalPreviewProps>(
  function TerminalPreview(props, ref) {
    const {
      code,
      language,
      themeId,
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
      tabTitle,
      onCodeChange,
      onTitleChange,
    } = props

    const theme = getTheme(themeId)
    const { highlightedCode, isLoading } = useShiki(code, language, themeId)

    return (
      <div
        ref={ref}
        className="terminal-preview"
        style={{
          display: 'inline-block',
          padding: showBackground ? '48px' : '0',
          backgroundColor: showBackground ? backgroundColor : 'transparent',
          borderRadius: showBackground ? borderRadius + 16 : 0,
        }}
      >
        <div
          className="terminal-window"
          style={{
            borderRadius: `${borderRadius}px`,
            overflow: 'hidden',
            boxShadow: shadowStyles[shadowIntensity],
            backgroundColor: theme.colors.background,
          }}
        >
          <WindowChrome
            style={windowStyle}
            title={tabTitle}
            theme={theme}
            onTitleChange={onTitleChange}
          />
          <CodeDisplay
            highlightedCode={highlightedCode}
            code={code}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontFamily={fontFamily}
            showLineNumbers={showLineNumbers}
            padding={padding}
            theme={theme}
            isLoading={isLoading}
            onCodeChange={onCodeChange}
          />
        </div>
      </div>
    )
  }
)
