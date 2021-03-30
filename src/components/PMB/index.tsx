import { FC } from 'react'
import { Box, Text, Stack, Button } from '@chakra-ui/react'

const PMB: FC = () => {
  return (
    <Box
      h={307}
      w="100%"
      bgColor="gray.900"
      bgSize="cover"
      style={{ backgroundImage: `url(/books.jpg)` }}
    >
      <Stack spacing={8} p={10} justify="center" align="center" h="full">
        <Box>
          <Stack spacing={2} justify="center" align="center">
            <Text
              fontSize={['xs', 'sm', 'md', 'xl']}
              color="white"
              fontWeight="semibold"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              INFORMASI
            </Text>
            <Text
              fontSize={['md', 'xl', '2xl', '4xl']}
              color="white"
              fontWeight="semibold"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Penerimaan Mahasiswa Baru
            </Text>
          </Stack>
        </Box>
        <Button
          shadow="md"
          fontSize={['xs', 'sm', 'md']}
          fontWeight="semibold"
          bg="darkPurple.900"
          _hover={{ bg: 'darkPurple.700' }}
          _active={{ bg: 'darkPurple.700' }}
          color="white"
          px={8}
          py={6}
          onClick={() =>
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSe5igaN-nHVfbxNqSYcvN1eaEdEIiPjhHFYm6LObxEa2XiTxQ/viewform',
              '_blank'
            )
          }
        >
          DAFTAR
        </Button>
      </Stack>
    </Box>
  )
}

export default PMB
