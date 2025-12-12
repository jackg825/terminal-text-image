export type WindowStyle = 'macos' | 'windows' | 'none'
export type ShadowIntensity = 'none' | 'light' | 'medium' | 'heavy'
export type ExportScale = 1 | 2 | 3

export interface Settings {
  code: string
  language: string
  theme: string
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
}

export const DEFAULT_CODE = `// Welcome to Terminal Text Image
// Transform your code into beautiful images

function greet(name: string) {
  console.log(\`Hello, \${name}!\`)
}

greet('World')`
