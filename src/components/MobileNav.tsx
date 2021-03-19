import {
  Box,
  Button,
  // BoxProps,
  Center,
  CloseButton,
  Collapse,
  Flex,
  // HStack,
  IconButton,
  IconButtonProps,
  Stack,
  // useBreakpointValue,
  // useColorModeValue,
  // useUpdateEffect,
} from "@chakra-ui/react"
import { 
  AnimatePresence,
  motion,
  // useElementScroll
} from "framer-motion"
import NextLink from "next/link"
import { useRouter } from "next/router"
import * as React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { RemoveScroll } from "react-remove-scroll"
// import { SidebarContent } from "./Sidebar"

const NavCollapse = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return(
    <>
      <Button
        flex="1"
        w="full"
        rounded="md"
        transition="0.2s all"
        py="2"
        fontWeight="medium"
        bg="darkPurple.900"
        color="white"
        _hover={{
          bg: "lightPurple.900"
        }}
        onClick={() => setIsOpen(!isOpen)}
        rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
      >
        Akademik
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          px={5}
          py={3}
          bg="darkPurple.900"
          rounded="md"
          shadow="md"
        >
          <NavLink href="/akademik/internasional-bussiness">Internasional Bussiness</NavLink>
          <NavLink href="/akademik/tourism-hospitality">{`Tourism & Hospitality`}</NavLink>
          <NavLink href="/akademik/visual-communication-design">Visual Communication Design</NavLink>
        </Box>
      </Collapse>
    </>
  )
}

function NavLink({ href, children }: {href: any, children: any}) {
  const { pathname } = useRouter()

  const [, group] = href.split("/")
  const isActive = pathname.includes(group)

  return (
    <NextLink href={href}>
      <Center
        flex="1"
        w="full"
        as="button"
        rounded="md"
        transition="0.2s all"
        py="2"
        fontWeight={isActive ? "semibold" : "medium"}
        bg={isActive ? "lightPurple.900" : "transparent"}
        color="white"
        _hover={{
          bg: "lightPurple.900"
        }}
      >
        {children}
      </Center>
    </NextLink>
  )
}

interface MobileNavContentProps {
  isOpen?: boolean
  onClose?: () => void
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose } = props
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)
  // const { pathname } = useRouter()

  // useRouteChanged(onClose)

  /**
   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
   * Result: We'll close the menu
   */
  // const showOnBreakpoint = useBreakpointValue({ base: true, lg: false })

  // React.useEffect(() => {
  //   if (showOnBreakpoint == false) {
  //     onClose()
  //   }
  // }, [showOnBreakpoint])

  // useUpdateEffect(() => {
  //   if (isOpen) {
  //     requestAnimationFrame(() => {
  //       closeBtnRef.current?.focus()
  //     })
  //   }
  // }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.div
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex
              direction="column"
              w="100%"
              bg="darkPurple.900"
              h="100vh"
              overflow="auto"
              pos="absolute"
              top="0"
              left="0"
              zIndex={20}
              pb="8"
            >
              <Box py="5">
                <Flex justify="center">
                  <CloseButton color="white" ref={closeBtnRef} onClick={onClose} />
                </Flex>
                <Box px="5" pb="6" pt="10">
                  <Stack spacing={5}>
                    <NavLink href="/">Home</NavLink>
                    <NavCollapse />
                    <NavLink href="/agenda">Agenda</NavLink>
                    <NavLink href="/about">About IKBP</NavLink>
                  </Stack>
                </Box>
              </Box>

              {/* <ScrollView
                onScroll={(scrolled) => {
                  setShadow(scrolled ? "md" : undefined)
                }}
              >
                <SidebarContent
                  pathname={pathname}
                  routes={getRoutes(pathname)}
                />
              </ScrollView> */}
            </Flex>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  )
}

// const ScrollView = (props: BoxProps & { onScroll?: any }) => {
//   const { onScroll, ...rest } = props
//   const [y, setY] = React.useState(0)
//   const elRef = React.useRef<any>()
//   const { scrollY } = useElementScroll(elRef)
//   React.useEffect(() => {
//     return scrollY.onChange(() => setY(scrollY.get()))
//   }, [scrollY])

//   useUpdateEffect(() => {
//     onScroll?.(y > 5 ? true : false)
//   }, [y])

//   return (
//     <Box
//       ref={elRef}
//       flex="1"
//       id="routes"
//       overflow="auto"
//       px="6"
//       pb="6"
//       {...rest}
//     />
//   )
// }

export const MobileNavButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: "flex", md: "none" }}
        aria-label="Mobile Nav"
        fontSize="20px"
        color="white"
        variant="ghost"
        icon={<AiOutlineMenu />}
        {...props}
      />
    )
  },
)