import React from "react";
import { Box, Heading, Flex, Text, Button, chakra } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FiMenu } from "react-icons/fi"

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

interface HeaderProps {
  drawerButton?(value: boolean): any 
}

const Header = ({drawerButton, ...props}: HeaderProps) => {
  const [show, setShow] = React.useState<boolean>(false);
  const handleToggle = () => setShow(!show);

  React.useEffect(() => {
    drawerButton(show || false)
  }, [show])

  const ref = React.useRef<HTMLHeadingElement>()

  return (
    <chakra.header
      ref={ref}
      transition="box-shadow 0.2s"
      w="full"
      shadow="lg"
      bg="white"
      borderBottom="4px"
      borderColor="darkPurple.900"
      {...props}
    >
      <Flex
        zIndex={20}
        px={5}
        py="1rem"
        flex={1}
        direction="column"
      >
        <Flex 
          justify="space-between"
          alignItems="center"
        >
          <Flex alignItems="center">
            <Stack direction="row" spacing={4}>
              <Button bg="transparent" onClick={handleToggle}>
                <FiMenu />
              </Button>
              <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                Dashboard
              </Heading>
            </Stack>
          </Flex>
          <Flex alignItems="center">
            <Stack direction="row">
              <Button leftIcon={(<Avatar name="admin" size="sm" />)} py={1} bg="transparent" borderRadius="lg">
                Admin
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </chakra.header>
  );
};

export default Header;
