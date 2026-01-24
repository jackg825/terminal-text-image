import { memo } from 'react'
import { languages } from '@/utils/languages'
import { useLanguage, useSetLanguage } from '@/stores/settingsStore'

export const LanguageControl = memo(function LanguageControl() {
  const language = useLanguage()
  const setLanguage = useSetLanguage()

  return (
    <div className="control-group">
      <label className="control-label">Language</label>
      <select
        className="control-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
})
