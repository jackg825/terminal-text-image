interface ExportButtonsProps {
  status: 'idle' | 'exporting' | 'success' | 'error'
  onCopy: () => void
  onDownloadPng: () => void
  onDownloadSvg: () => void
}

export function ExportButtons({
  status,
  onCopy,
  onDownloadPng,
  onDownloadSvg,
}: ExportButtonsProps) {
  const isExporting = status === 'exporting'
  const isSuccess = status === 'success'

  return (
    <div className="export-buttons">
      <button
        className={`export-btn export-btn-primary ${isSuccess ? 'success' : ''}`}
        onClick={onCopy}
        disabled={isExporting}
      >
        {isExporting ? (
          <LoadingSpinner />
        ) : isSuccess ? (
          <CheckIcon />
        ) : (
          <CopyIcon />
        )}
        <span>{isSuccess ? 'Copied!' : 'Copy'}</span>
      </button>

      <button
        className="export-btn"
        onClick={onDownloadPng}
        disabled={isExporting}
      >
        {isExporting ? <LoadingSpinner /> : <DownloadIcon />}
        <span>PNG</span>
      </button>

      <button
        className="export-btn"
        onClick={onDownloadSvg}
        disabled={isExporting}
      >
        {isExporting ? <LoadingSpinner /> : <DownloadIcon />}
        <span>SVG</span>
      </button>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function LoadingSpinner() {
  return (
    <svg
      className="spinner"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" opacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  )
}
