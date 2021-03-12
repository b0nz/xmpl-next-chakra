// import NextLink from "next/link"
import { useRouter } from "next/router"
import * as React from "react"
import _ from "lodash"
import {
  // Badge,
  Box,
  // Center,
  chakra,
  // Flex,
  // List,
  // ListItem,
  // ListProps,
  // Stack,
  useColorModeValue,
} from "@chakra-ui/react"

// export type SidebarContentProps = Routes & {
//   pathname?: string
//   contentRef?: any
// }

export function SidebarContent(props: any) {
  const { routes } = props
  return (
    <>
      {routes.map((lvl1: any, idx: any) => {
        return (
          <React.Fragment key={idx}>
            {lvl1.heading && (
              <chakra.h4
                fontSize="sm"
                fontWeight="bold"
                my="1.25rem"
                textTransform="uppercase"
                letterSpacing="wider"
                color={useColorModeValue("gray.700", "inherit")}
              >
                {lvl1.title}
              </chakra.h4>
            )}

            <div>test</div>
          </React.Fragment>
        )
      })}
    </>
  )
}

// const MainNavLink = ({ href, icon, children }: { href: any, icon: any, children: any }) => {
//   const { pathname } = useRouter()
//   const [, group] = href.split("/")
//   const active = pathname.includes(group)
//   const linkColor = useColorModeValue("gray.900", "whiteAlpha.900")

//   return (
//     <NextLink href={href} passHref>
//       <Flex
//         as="a"
//         align="center"
//         fontSize="sm"
//         fontWeight="semibold"
//         transitionProperty="colors"
//         transitionDuration="200ms"
//         color={active ? linkColor : "gray.500"}
//         _hover={{ color: linkColor }}
//       >
//         <Center w="6" h="6" bg="teal.400" rounded="base" mr="3">
//           {icon}
//         </Center>
//         {children}
//       </Flex>
//     </NextLink>
//   )
// }

const Sidebar = ({ routes }: {routes: any}) => {
  const { pathname } = useRouter()
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <Box
      ref={ref}
      as="nav"
      aria-label="Main Navigation"
      pos="sticky"
      sx={{
        overscrollBehavior: "contain",
      }}
      top="6.5rem"
      w="280px"
      h="calc(((100vh - 1.5rem) - 64px) - 42px);"
      pr="8"
      pb="8"
      pl="3"
      pt="8"
      overflowY="auto"
      className="sidebar-content"
      flexShrink={0}
      display={{ base: "none", md: "block" }}
    >
      <SidebarContent routes={routes} pathname={pathname} contentRef={ref} />
    </Box>
  )
}

export default Sidebar