import { useMemo, useRef, useEffect } from 'react'
import DOMPurify from 'dompurify'
import type { TerminalTheme } from '@/types/theme'

interface CodeDisplayProps {
  highlightedCode: string
  code: string
  fontSize: number
  lineHeight: number
  fontFamily: string
  showLineNumbers: boolean
  padding: number
  theme: TerminalTheme
  isLoading: boolean
  onCodeChange?: (code: string) => void
}

export function CodeDisplay({
  highlightedCode,
  code,
  fontSize,
  lineHeight,
  fontFamily,
  showLineNumbers,
  padding,
  theme,
  isLoading,
  onCodeChange,
}: CodeDisplayProps) {
  const lineCount = useMemo(() => code.split('\n').length, [code])
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const codeContentRef = useRef<HTMLDivElement>(null)

  // Sync scroll between textarea and highlighted code
  useEffect(() => {
    const textarea = textareaRef.current
    const codeContent = codeContentRef.current
    if (!textarea || !codeContent) return

    const handleScroll = () => {
      codeContent.scrollTop = textarea.scrollTop
      codeContent.scrollLeft = textarea.scrollLeft
    }

    textarea.addEventListener('scroll', handleScroll)
    return () => textarea.removeEventListener('scroll', handleScroll)
  }, [])

  // Sanitize HTML from Shiki to prevent XSS
  const sanitizedHtml = useMemo(() => {
    return DOMPurify.sanitize(highlightedCode, {
      ALLOWED_TAGS: ['pre', 'code', 'span'],
      ALLOWED_ATTR: ['class', 'style'],
    })
  }, [highlightedCode])

  return (
    <div
      className="code-display"
      style={{
        position: 'relative',
        padding: `${padding}px`,
        backgroundColor: theme.colors.background,
        fontFamily: `"${fontFamily}", "Fira Code", "Monaco", "Consolas", monospace`,
        fontSize: `${fontSize}px`,
        lineHeight: lineHeight,
        overflow: 'hidden',
      }}
    >
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.background,
            color: theme.colors.foreground,
            opacity: 0.5,
          }}
        >
          Loading...
        </div>
      )}
      <div
        style={{
          display: 'flex',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.15s ease',
        }}
      >
        {showLineNumbers && (
          <LineNumbers
            count={lineCount}
            fontSize={fontSize}
            lineHeight={lineHeight}
            color={theme.colors.brightBlack}
          />
        )}
        <div
          className="code-editor-wrapper"
          style={{
            position: 'relative',
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* Highlighted code (background) */}
          <div
            ref={codeContentRef}
            className="code-content"
            style={{
              overflow: 'auto',
              pointerEvents: 'none',
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
          </div>

          {/* Editable textarea (foreground overlay) */}
          {onCodeChange && (
            <textarea
              ref={textareaRef}
              className="code-editor-overlay"
              value={code}
              onChange={(e) => onCodeChange(e.target.value)}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                padding: 0,
                margin: 0,
                border: 'none',
                outline: 'none',
                resize: 'none',
                background: 'transparent',
                color: 'transparent',
                caretColor: theme.colors.cursor,
                fontFamily: `"${fontFamily}", "Fira Code", "Monaco", "Consolas", monospace`,
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
                whiteSpace: 'pre',
                overflow: 'auto',
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

interface LineNumbersProps {
  count: number
  fontSize: number
  lineHeight: number
  color: string
}

function LineNumbers({ count, fontSize, lineHeight, color }: LineNumbersProps) {
  const numbers = useMemo(
    () => Array.from({ length: count }, (_, i) => i + 1),
    [count]
  )

  return (
    <div
      className="line-numbers"
      style={{
        paddingRight: '16px',
        marginRight: '16px',
        borderRight: `1px solid ${color}33`,
        textAlign: 'right',
        color: color,
        userSelect: 'none',
        fontSize: `${fontSize}px`,
        lineHeight: lineHeight,
      }}
    >
      {numbers.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
  )
}
