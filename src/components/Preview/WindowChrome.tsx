import type { WindowStyle } from '@/types/settings'
import type { TerminalTheme } from '@/types/theme'

interface WindowChromeProps {
  style: WindowStyle
  title: string
  theme: TerminalTheme
  onTitleChange?: (title: string) => void
}

export function WindowChrome({ style, title, theme, onTitleChange }: WindowChromeProps) {
  if (style === 'none') return null

  return (
    <div
      className="window-chrome"
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        padding: '0 16px',
        backgroundColor: theme.colors.titleBar,
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        userSelect: 'none',
      }}
    >
      {style === 'macos' && <MacOSButtons />}
      {style === 'windows' && <WindowsButtons />}
      {onTitleChange ? (
        <input
          type="text"
          className="window-title-input"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: '13px',
            color: theme.colors.foreground,
            opacity: 0.6,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            padding: 0,
            margin: 0,
            minWidth: 0,
          }}
          placeholder="untitled"
        />
      ) : (
        <span
          className="window-title"
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: '13px',
            color: theme.colors.foreground,
            opacity: 0.6,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          {title}
        </span>
      )}
      {/* Spacer to center title */}
      <div style={{ width: style === 'macos' ? 52 : 68 }} />
    </div>
  )
}

function MacOSButtons() {
  return (
    <div
      className="macos-buttons"
      style={{
        display: 'flex',
        gap: '8px',
      }}
    >
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#FF5F56',
        }}
      />
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#FFBD2E',
        }}
      />
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#27C93F',
        }}
      />
    </div>
  )
}

function WindowsButtons() {
  return (
    <div
      className="windows-buttons"
      style={{
        display: 'flex',
        gap: '4px',
      }}
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="10" height="1" viewBox="0 0 10 1" fill="currentColor" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <rect width="10" height="1" />
        </svg>
      </div>
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <rect x="0.5" y="0.5" width="7" height="7" />
        </svg>
      </div>
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <line x1="2" y1="2" x2="8" y2="8" />
          <line x1="8" y1="2" x2="2" y2="8" />
        </svg>
      </div>
    </div>
  )
}
