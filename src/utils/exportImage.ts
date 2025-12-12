import { toPng, toSvg, toBlob } from 'html-to-image'
import type { ExportScale } from '@/types/settings'

export interface ExportOptions {
  scale?: ExportScale
  quality?: number
  backgroundColor?: string
}

const defaultOptions: ExportOptions = {
  scale: 2,
  quality: 1,
}

export async function exportToPng(
  element: HTMLElement,
  options: ExportOptions = {}
): Promise<string> {
  const { scale = 2, quality = 1, backgroundColor } = { ...defaultOptions, ...options }

  // Add exporting class to hide overlay elements
  element.classList.add('exporting')

  try {
    const dataUrl = await toPng(element, {
      pixelRatio: scale,
      quality,
      backgroundColor,
      style: {
        transform: 'scale(1)',
        transformOrigin: 'top left',
      },
    })

    return dataUrl
  } finally {
    // Always remove exporting class
    element.classList.remove('exporting')
  }
}

export async function exportToSvg(
  element: HTMLElement,
  options: ExportOptions = {}
): Promise<string> {
  const { backgroundColor } = { ...defaultOptions, ...options }

  // Add exporting class to hide overlay elements
  element.classList.add('exporting')

  try {
    const dataUrl = await toSvg(element, {
      backgroundColor,
      style: {
        transform: 'scale(1)',
        transformOrigin: 'top left',
      },
    })

    return dataUrl
  } finally {
    // Always remove exporting class
    element.classList.remove('exporting')
  }
}

export async function exportToBlob(
  element: HTMLElement,
  options: ExportOptions = {}
): Promise<Blob | null> {
  const { scale = 2, quality = 1, backgroundColor } = { ...defaultOptions, ...options }

  // Add exporting class to hide overlay elements
  element.classList.add('exporting')

  try {
    const blob = await toBlob(element, {
      pixelRatio: scale,
      quality,
      backgroundColor,
      style: {
        transform: 'scale(1)',
        transformOrigin: 'top left',
      },
    })

    return blob
  } finally {
    // Always remove exporting class
    element.classList.remove('exporting')
  }
}

export function downloadDataUrl(dataUrl: string, filename: string): void {
  const link = document.createElement('a')
  link.download = filename
  link.href = dataUrl
  link.click()
}

export async function copyToClipboard(element: HTMLElement, options: ExportOptions = {}): Promise<boolean> {
  try {
    const blob = await exportToBlob(element, options)
    if (!blob) return false

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ])
    return true
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return false
  }
}
