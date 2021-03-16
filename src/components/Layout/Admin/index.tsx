import { FC, useState } from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import Header from './Header'

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
          overflowY="auto"
          w={collapse ? "100px" : "230px"}
          position="static"
          pr="8"
          pb="8"
          pl="3"
          pt="8"
          color="white"
          bg="darkPurple.900"
        >
          <div>test</div>
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