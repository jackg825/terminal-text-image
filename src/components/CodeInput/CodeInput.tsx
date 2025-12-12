import { useSettingsStore } from '@/stores/settingsStore'

export function CodeInput() {
  const { code, setCode } = useSettingsStore()

  return (
    <div className="code-input-container">
      <textarea
        className="code-input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="// Paste or type your code here..."
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  )
}
