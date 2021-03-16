import { FC, useState } from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import Header from './Header'
import IKBPLogo from '../../IKBPLogo';

const AdminLayout: FC = ({ children }) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return(
    <>
      <Flex minH="100vh">  
        <Box
          as="nav"
          aria-label="Main Navigation"
          pos="fixed"
          sx={{
            overscrollBehavior: "contain",
          }}
          insetY={0}
          left={0}
          zIndex="30"
          w={collapse ? "100px" : "230px"}
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
          <Flex direction="column" overflowY="auto">
            <div>test</div>
          </Flex>
        </Box>
        <Flex flex={1} direction="column" overflow="hidden">
          <Header drawerButton={(value: boolean) => setCollapse(value)} />
          <Box>
            {children}
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default AdminLayout