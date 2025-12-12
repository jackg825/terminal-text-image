export interface TerminalTheme {
  id: string
  name: string
  type: 'dark' | 'light'
  colors: {
    // Terminal chrome
    background: string
    foreground: string
    selection: string
    cursor: string
    // Window decoration
    titleBar: string
    // ANSI colors
    black: string
    red: string
    green: string
    yellow: string
    blue: string
    magenta: string
    cyan: string
    white: string
    // Bright variants
    brightBlack: string
    brightRed: string
    brightGreen: string
    brightYellow: string
    brightBlue: string
    brightMagenta: string
    brightCyan: string
    brightWhite: string
  }
  // Shiki theme name
  shikiTheme: string
}
