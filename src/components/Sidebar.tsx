import { FC } from 'react'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Box, chakra, useColorModeValue } from '@chakra-ui/react'

interface SidebarContentProps {
  routes?: any
  pathname?: any
  contentRef?: any
}
interface SidebarProps {
  routes?: any
}

const SidebarContent: FC<SidebarContentProps> = (props) => {
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
                color={useColorModeValue('gray.700', 'inherit')}
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

const Sidebar: FC<SidebarProps> = ({ routes }) => {
  const { pathname } = useRouter()
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <Box
      ref={ref}
      as="nav"
      aria-label="Main Navigation"
      pos="sticky"
      sx={{
        overscrollBehavior: 'contain',
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
      display={{ base: 'none', md: 'block' }}
    >
      <SidebarContent routes={routes} pathname={pathname} contentRef={ref} />
    </Box>
  )
}

export default Sidebar
