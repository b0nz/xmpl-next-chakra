import { FC } from 'react'
import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container: FC<FlexProps> = (props) => {
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
      px={{ base: 5, md: 0 }}
      pb={50}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
