import { FC } from 'react'
import { useEffect, useState } from 'react'
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
  Button,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import Head from 'next/head'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const ValidationSchema = Yup.object({
  email: Yup.string()
    .email('Masukan email dengan benar')
    .required('Email tidak boleh kosong'),
  password: Yup.string().required('Password tidak boleh kosong'),
})

const InputPassword: FC = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handlePasswordVisible = () => setShowPassword(!showPassword)

  return (
    <InputGroup>
      <Input type={showPassword ? 'text' : 'password'} {...props} />
      <InputRightElement width="3rem">
        <Button
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          h="1.5rem"
          size="sm"
          onClick={handlePasswordVisible}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

const Login: FC = () => {
  const toast = useToast()
  const route = useRouter()
  const data = Cookies.get('ikbp-secret') || null
  const router = useRouter()

  useEffect(() => {
    if (data) {
      router.replace('/admin/dashboard')
    }
  }, [])

  const initialValues: {
    email: string
    password: string
  } = {
    email: '',
    password: '',
  }
  const onSubmit = async (values, actions) => {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    const data = await response.json()
    if (data.success) {
      Cookies.set('ikbp-secret', data?.data?.token, {
        expires: (data.expires_in || 86400) / 86400,
      })
      route.replace('/admin/dashboard')
    } else {
      toast({
        title: 'Login Failed',
        description: data.message,
        status: 'error',
        duration: 5000,
        position: 'top',
        isClosable: true,
      })
    }
    await actions.setSubmitting(false)
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex
        w="full"
        minH="100vh"
        justify="center"
        align="center"
        bg="darkPurple.900"
      >
        <Box p={2} w="full" mx="auto" maxW="lg">
          <Box textAlign="center">
            <Heading color="white">LOGIN DASHBOARD IKBP</Heading>
          </Box>

          <Box
            my={8}
            textAlign="left"
            bg="white"
            px={10}
            py={12}
            borderRadius={4}
            boxShadow="lg"
          >
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={ValidationSchema}
            >
              {({ handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isRequired
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input {...field} id="email" type="email" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        mt={6}
                        isRequired
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel>Password</FormLabel>
                        <InputPassword {...field} />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    width="full"
                    mt={4}
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Login
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Login
