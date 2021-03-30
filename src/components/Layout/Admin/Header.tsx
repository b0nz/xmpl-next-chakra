import { useState, FC, useEffect, useRef } from 'react'
import {
  Heading,
  Flex,
  Button,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react'
import { Stack } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import { FiMenu } from 'react-icons/fi'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

interface HeaderProps {
  drawerButton?(value: boolean): any
}

const Header: FC<HeaderProps> = ({ drawerButton, ...props }) => {
  const [show, setShow] = useState<boolean>(false)
  const handleToggle = () => setShow(!show)
  const router = useRouter()

  useEffect(() => {
    drawerButton(show || false)
  }, [show])

  const ref = useRef<HTMLHeadingElement>()

  return (
    <chakra.header
      ref={ref}
      transition="box-shadow 0.2s"
      w="full"
      shadow="md"
      bg="white"
      {...props}
    >
      <Flex zIndex={20} px={5} py="1rem" flex={1} direction="column">
        <Flex justify="space-between" alignItems="center">
          <Flex alignItems="center">
            <Stack direction="row" spacing={4}>
              <Button bg="transparent" onClick={handleToggle}>
                <FiMenu />
              </Button>
              <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
                Dashboard
              </Heading>
            </Stack>
          </Flex>
          <Flex alignItems="center">
            <Stack direction="row">
              <Popover placement="bottom-start">
                <PopoverTrigger>
                  <Button
                    leftIcon={<Avatar name="admin" size="sm" />}
                    py={1}
                    bg="transparent"
                    borderRadius="lg"
                  >
                    Admin
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody>
                    <Button
                      w="full"
                      onClick={() => {
                        Cookies.remove('ikbp-secret')
                        router.reload()
                      }}
                    >
                      Logout
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </chakra.header>
  )
}

export default Header
