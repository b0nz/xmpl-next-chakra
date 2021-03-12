import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace`, body: `'Poppins', sans-serif` }

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    ikbppurple: {
      100: "#5352A0",
      500: "#373D7F",
    },
  },
  fonts,
  breakpoints,
})

export default theme
