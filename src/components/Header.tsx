import {
  chakra,
  Flex,
  Box,
  Button,
  useDisclosure,
  useUpdateEffect,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import IKBPLogo from './IKBPLogo'
import { MobileNavButton, MobileNavContent } from './MobileNav'

interface NavItemProps {
  to: string,
  children: React.ReactNode,
}

const NavItem = ({ to, children }: NavItemProps) => (
  <NextLink href={to} passHref>
    <Button
      bg="darkPurple.900"
      color="white"
      display="inline-flex"
      alignItems="center"
      fontSize="md"
      _hover={{ bg: "lightPurple.900" }}
      _focus={{ boxShadow: "none"  }}
    >
      {children}
    </Button>
  </NextLink>
)

function HeaderContent() {
  const mobileNav = useDisclosure()
  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <>
      <Box display={["block", "none"]}>
        <chakra.div mx="auto" maxW="1110px">
          <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
            <IKBPLogo href="/" />
            <Flex
              justify="flex-end"
              w="100%"
              maxW="824px"
              align="center"
            >
              <MobileNavButton
                ref={mobileNavBtnRef}
                aria-label="Open Menu"
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
        </chakra.div>
      </Box>
      <Box display={["none", "block"]}>
        <chakra.div mx="auto" maxW="1110px">
          <Flex w="100%" h="100%" px="6" align="center" justify="center">
            <IKBPLogo href="/" />
          </Flex>
        </chakra.div>
        <Box bg="darkPurple.900">
          <chakra.div mx="auto" maxW="1110px">
            <Flex w="100%" h="100%" px="6" py={2} align="center" justify="center">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/programs">Programs</NavItem>
              <NavItem to="/event">Event</NavItem>
              <NavItem to="/about">About IKBP</NavItem>
            </Flex>
          </chakra.div>
        </Box>
      </Box>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </>
  )
}

function Header(props: any) {
  const ref = React.useRef<HTMLHeadingElement>()

  return (
    <>
      <chakra.header
        ref={ref}
        transition="box-shadow 0.2s"
        top="0"
        zIndex="3"
        bg="lightPurple.900"
        left="0"
        right="0"
        width="full"
        {...props}
      >
        <HeaderContent />
      </chakra.header>
    </>
  )
}

export default Header
