import {
  chakra,
  Flex,
  Box,
  Button,
  Link,
  useDisclosure,
  useUpdateEffect,
} from "@chakra-ui/react"
import { useViewportScroll } from "framer-motion"
import NextLink from "next/link"
import React from "react"
import Image from 'next/image'
import { MobileNavButton, MobileNavContent } from "./MobileNav"

const IKBPLogo = () => (
  <NextLink href="/" passHref>
    <chakra.a display="block" aria-label="Institut Kristen Bukit Pengharapan">
      <Image src="/IKBP.jpg" width={221} height={101} />
    </chakra.a>
  </NextLink>
);

interface NavItemProps {
  to: string,
  children: React.ReactNode,
}

const NavItem = ({ to, children }: NavItemProps) => (
  <NextLink href={to} passHref>
    <Button
      bg="ikbppurple.500"
      color="white"
      display="inline-flex"
      alignItems="center"
      fontSize="md"
      _hover={{ bg: "ikbppurple.100" }}
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
            <IKBPLogo />
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
            <IKBPLogo />
          </Flex>
        </chakra.div>
        <Box bg="ikbppurple.500">
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
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useViewportScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <>
      <chakra.header
        ref={ref}
        transition="box-shadow 0.2s"
        top="0"
        zIndex="3"
        bg="ikbppurple.100"
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