import { FC, useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Link,
  Stack,
  Tooltip,
  Text,
  Spinner,
} from '@chakra-ui/react'
import Header from './Header'
import IKBPLogo from '../../IKBPLogo'
import NextLink from 'next/link'
import Cookies from 'js-cookie'
import { FiHome, FiImage, FiUsers } from 'react-icons/fi'
import { useRouter } from 'next/router'

interface NavItemTypes {
  isCollapse?: boolean
  href: string
  name: string
  icon: any
}

const menu = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    location: '/admin/dashboard',
    icon: <FiHome />,
  },
  {
    key: 'banner',
    name: 'Banner',
    location: '/admin/dashboard/banner',
    icon: <FiImage />,
  },
  {
    key: 'users',
    name: 'Users',
    location: '/admin/dashboard/users',
    icon: <FiUsers />,
  },
]

const NavItem = ({ isCollapse, name, icon, href }: NavItemTypes) => {
  const router = useRouter()
  return isCollapse ? (
    <NextLink href={href} passHref>
      <Link
        fontSize={'md'}
        rounded={'md'}
        fontWeight="medium"
        px={3}
        py={4}
        ml={'-12px!important'}
        bg={router.pathname === href ? 'darkPurple.900' : 'lightPurple.900'}
        _hover={{ bg: 'darkPurple.900' }}
      >
        <Tooltip label={name} aria-label={name} placement="right" hasArrow>
          <Flex justify="center" align="center">
            {icon}
          </Flex>
        </Tooltip>
      </Link>
    </NextLink>
  ) : (
    <NextLink href={href} passHref>
      <Link
        fontSize={'md'}
        rounded={'md'}
        fontWeight="medium"
        px={5}
        py={4}
        bg={router.pathname === href ? 'darkPurple.900' : 'lightPurple.900'}
        _hover={{ bg: 'darkPurple.900' }}
      >
        <Flex justify="start" align="center">
          {icon}
          <Text ml={3}>{name}</Text>
        </Flex>
      </Link>
    </NextLink>
  )
}

const AdminLayout: FC = ({ children }) => {
  const [collapse, setCollapse] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const data = Cookies.get('ikbp-secret') || null
  const router = useRouter()

  const verifyToken = async () => {
    setIsLoading(true)
    const res = await fetch('/api/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: data }),
    })
    const resp = await res.json()
    setIsLoading(false)

    if (!resp.success) {
      Cookies.remove('ikbp-secret')
      router.replace('/admin')
    }
  }

  useEffect(() => {
    if (!data) {
      router.replace('/admin')
    }
    verifyToken()
  }, [data])

  return !isLoading && data ? (
    <>
      <Flex minH="100vh">
        <Box
          as="nav"
          aria-label="Main Navigation"
          pos="fixed"
          sx={{
            overscrollBehavior: 'contain',
          }}
          insetY={0}
          left={0}
          zIndex="30"
          w={collapse ? '100px' : '230px'}
          position="static"
          color="white"
          bg="lightPurple.900"
          transition="box-shadow 0.2s"
        >
          {collapse ? (
            <Flex justify="center" align="center" px={3} py={5}>
              <IKBPLogo href="/admin/dashboard" />
            </Flex>
          ) : (
            <Flex justify="center" align="center" px={10} py={1}>
              <IKBPLogo href="/admin/dashboard" />
            </Flex>
          )}
          <Flex
            direction="column"
            justify="center"
            overflowY="auto"
            px={5}
            py={5}
          >
            <Stack>
              {menu.map((item) => (
                <NavItem
                  key={item.key}
                  isCollapse={collapse}
                  name={item.name}
                  icon={item.icon}
                  href={item.location}
                />
              ))}
            </Stack>
          </Flex>
        </Box>
        <Flex flex={1} direction="column" overflow="hidden">
          <Header drawerButton={(value: boolean) => setCollapse(value)} />
          <Box>{children}</Box>
        </Flex>
      </Flex>
    </>
  ) : (
    <Flex justify="center" align="center" minH="100vh">
      <Spinner />
    </Flex>
  )
}

export default AdminLayout
