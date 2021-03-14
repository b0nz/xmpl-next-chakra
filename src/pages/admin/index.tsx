import { FormEventHandler, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { 
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react';
import Head from 'next/head';

const InputPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handlePasswordVisible = () => setShowPassword(!showPassword)

  return (
    <InputGroup>
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="*******"
        name="password"
      />
      <InputRightElement width="3rem">
        <Button bg="transparent" _hover={{bg: 'transparent'}} h="1.5rem" size="sm" onClick={handlePasswordVisible}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex w="full" minH="100vh" justify="center" align="center" bg="darkPurple.900">
        <Box p={2} w="full" mx="auto" maxW="lg">
          <Box textAlign="center">
            <Heading color="white">Login</Heading>
          </Box>

          <Box my={8} textAlign="left" bg="white" px={10} py={12} borderRadius={4} boxShadow="lg">
            <form onSubmit={(e: any) => {
              e.preventDefault();
              console.log(e.target?.email?.value, e.target?.password?.value)
            }}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input name="email" type="email" placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={6} isRequired >
                <FormLabel>Password</FormLabel>
                <InputPassword />
              </FormControl>
              <Button
                width="full"
                mt={4}
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Login