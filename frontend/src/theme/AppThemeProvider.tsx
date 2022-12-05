import React, { useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import WebFont from 'webfontloader'

export type ThemeSize = 'xs' | 'sm' | 'md' | 'lg'

export type ThemeFunctions = {
  // makes a media query
  media: (args: {
    from?: ThemeSize | number
    to?: ThemeSize | number
  }) => string
}

export interface IAppTheme {
  primaryColor: string

  text: {
    nav: string
    navHighlight: string
    error: string
    body: string
    greenScreen: string
  }

  background: {
    navbar: string
  }

  measurements: {
    mobileFrameContentWidth: number
  }

  screenSizes: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }

  fn: ThemeFunctions
}

export type ThemeFn<T = string> = (theme: IAppTheme) => T

const GlobalStyle = createGlobalStyle`
  overflow-x: hidden;

  body {
    padding: 0;
    margin: 0;
    background-color: #f5f5f5;

    &, * {
      box-sizing: border-box;
    }

    * {
      margin: 0;
      padding: 0;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  p {
    display: block
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: Changa,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;
    line-height: 1.1;
}
a {
    text-decoration: none;
  }
  @font-face {
    font-family: 'Changa';
    src: url("/fonts/Changa-Regular.ttf") format('truetype');
  }
`

interface IAppThemeProviderProps {
  children: React.ReactNode
}

const theme: IAppTheme = {
  primaryColor: '#EF631C',
  text: {
    nav: '#686a6b',
    navHighlight: '#fff',
    error: '#F35252',
    body: '#fff',
    greenScreen: '#3ae645',
  },
  background: {
    navbar: '#000000',
  },
  screenSizes: {
    xs: 310,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  measurements: {
    mobileFrameContentWidth: 240,
  },
  get fn(): ThemeFunctions {
    const { screenSizes } = this

    return {
      media: ({ from, to }) => {
        const derived = {
          get fromSize() {
            if (typeof from === 'string') return screenSizes[from]
            return from
          },
          get toSize() {
            if (typeof to === 'string') return screenSizes[to]
            return to
          },
        }

        const { fromSize, toSize } = derived
        const parts: string[] = []

        if (fromSize) parts.push(`(min-width: ${fromSize}px)`)
        if (toSize) parts.push(`(max-width: ${toSize}px)`)

        if (parts.length === 0) throw new Error(`Media missing [from, to]`)

        return `@media ${parts.join(' and ')}`
      },
    }
  },
}

const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          'Changa',
        ],
      },
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider
