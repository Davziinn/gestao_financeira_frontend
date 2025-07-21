import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      surface: string
      card: string
      textPrimary: string
      textSecondary: string
      green: string
      red: string
      blue: string
      purple: string
      orange: string
      yellow: string
      inputBackground: string
      border: string
    },
    fonts: {
      regular: string
    }
  }
}
