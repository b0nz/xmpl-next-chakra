import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      mx="auto"
      maxW="1110px"
      px={{ base: 10, md: 0 }}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
