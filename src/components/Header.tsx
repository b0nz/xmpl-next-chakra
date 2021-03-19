import {
  chakra,
  Flex,
  Box,
  Button,
  useDisclosure,
  useUpdateEffect,
  Popover,
  PopoverTrigger,
  PopoverContent,
  SimpleGrid,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import IKBPLogo from './IKBPLogo'
import { MobileNavButton, MobileNavContent } from './MobileNav'
import { FiChevronDown } from 'react-icons/fi'

interface NavItemProps {
  to: string,
  children: React.ReactNode,
}

const Section = (props) => {
  return (
    <Link
      m={-3}
      p={3}
      display="flex"
      alignItems="start"
      rounded="lg"
      _hover={{ bg: "lightPurple.900" }}
      href={props.to}
    >
      <Box ml={4}>
        <chakra.p fontSize="sm" fontWeight="normal" color="white">
          {props.title}
        </chakra.p>
      </Box>
    </Link>
  );
};

const Features = (props) => {
  return (
    <React.Fragment>
      <SimpleGrid
        columns={props.h ? { base: 1, md: 3, lg: 5 } : 1}
        pos="relative"
        gap={{ base: 6, sm: 8 }}
        px={3}
        py={4}
        p={{ sm: 8 }}
        bg="darkPurple.900"
      >
        <Section to="/akademik/internasional-bussiness" title="Internasional Bussiness" />
        <Section to="/akademik/tourism-hospitality" title={`Tourism & Hospitality`} />
        <Section to="/akademik/visual-communication-design" title="Visual Communication Design" />
      </SimpleGrid>
    </React.Fragment>
  );
};

const NavItem = ({ to, children }: NavItemProps) => (
  <NextLink href={to} passHref>
    <Button
      bg="darkPurple.900"
      color="white"
      display="inline-flex"
      alignItems="center"
      fontWeight="normal"
      fontSize="md"
      _hover={{ bg: "lightPurple.900" }}
      _active={{ bg: "lightPurple.900" }}
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
              <Popover>
                <PopoverTrigger>
                <Button
                  bg="darkPurple.900"
                  color="white"
                  display="inline-flex"
                  alignItems="center"
                  fontWeight="normal"
                  fontSize="md"
                  _hover={{ bg: "lightPurple.900" }}
                  _active={{ bg: "lightPurple.900" }}
                  _focus={{ boxShadow: "none"  }}
                  rightIcon={<FiChevronDown />}
                >
                  Akademik
                </Button>
                </PopoverTrigger>
                <PopoverContent
                  mt={1}
                  w="100vw"
                  maxW="md"
                  _focus={{ boxShadow: "md" }}
                >
                  <Features />
                </PopoverContent>
              </Popover>
              <NavItem to="/agenda">Agenda</NavItem>
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
  return (
    <>
      <chakra.header
        transition="box-shadow 0.2s"
        top="0"
        zIndex="3"
        bg="lightPurple.900"
        left="0"
        right="0"
        width="full"
        position="sticky"
        {...props}
      >
        <HeaderContent />
      </chakra.header>
    </>
  )
}

export default Header
