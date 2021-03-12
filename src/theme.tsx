import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

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
    lightPurple: {
      100: '#D4D4E9',
      300: '#B3B3D8',
      500: '#9291C7',
      700: '#7070B5',
      900: '#5352A0',
    },
    darkPurple: {
      100: '#a7acd9',
      300: '#848BCA',
      500: '#6169BB',
      700: '#464EA3',
      900: '#373D7F'
    }
  },
  fonts: {
    body: `"Poppins", sans-serif`,
  },
  breakpoints,
})

export default theme
