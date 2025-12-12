import { useState, useCallback, useRef } from 'react'
import {
  exportToPng,
  exportToSvg,
  downloadDataUrl,
  copyToClipboard,
  type ExportOptions,
} from '@/utils/exportImage'

type ExportStatus = 'idle' | 'exporting' | 'success' | 'error'

interface UseExportResult {
  previewRef: React.RefObject<HTMLDivElement>
  status: ExportStatus
  error: Error | null
  downloadPng: (filename?: string, options?: ExportOptions) => Promise<void>
  downloadSvg: (filename?: string, options?: ExportOptions) => Promise<void>
  copyImage: (options?: ExportOptions) => Promise<boolean>
}

export function useExport(): UseExportResult {
  const previewRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<ExportStatus>('idle')
  const [error, setError] = useState<Error | null>(null)

  const downloadPng = useCallback(
    async (filename = 'terminal-code', options: ExportOptions = {}) => {
      if (!previewRef.current) return

      setStatus('exporting')
      setError(null)

      try {
        const dataUrl = await exportToPng(previewRef.current, options)
        downloadDataUrl(dataUrl, `${filename}.png`)
        setStatus('success')
        setTimeout(() => setStatus('idle'), 2000)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Export failed'))
        setStatus('error')
      }
    },
    []
  )

  const downloadSvg = useCallback(
    async (filename = 'terminal-code', options: ExportOptions = {}) => {
      if (!previewRef.current) return

      setStatus('exporting')
      setError(null)

      try {
        const dataUrl = await exportToSvg(previewRef.current, options)
        downloadDataUrl(dataUrl, `${filename}.svg`)
        setStatus('success')
        setTimeout(() => setStatus('idle'), 2000)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Export failed'))
        setStatus('error')
      }
    },
    []
  )

  const copyImage = useCallback(async (options: ExportOptions = {}): Promise<boolean> => {
    if (!previewRef.current) return false

    setStatus('exporting')
    setError(null)

    try {
      const success = await copyToClipboard(previewRef.current, options)
      setStatus(success ? 'success' : 'error')
      setTimeout(() => setStatus('idle'), 2000)
      return success
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Copy failed'))
      setStatus('error')
      return false
    }
  }, [])

  return {
    previewRef,
    status,
    error,
    downloadPng,
    downloadSvg,
    copyImage,
  }
}
