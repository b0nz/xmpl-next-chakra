import { FC, useState, useRef, forwardRef } from 'react'
import {
  Box,
  Button,
  Center,
  CloseButton,
  Collapse,
  Flex,
  IconButton,
  IconButtonProps,
  Stack,
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { RemoveScroll } from 'react-remove-scroll'

interface NavLinkProps {
  href?: string
}
interface MobileNavContentProps {
  isOpen?: boolean
  onClose?: () => void
}

const NavCollapse: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
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
          bg: 'lightPurple.900',
        }}
        onClick={() => setIsOpen(!isOpen)}
        rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
      >
        Akademik
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box px={5} py={3} bg="darkPurple.900" rounded="md" shadow="md">
          <NavLink href="/akademik/internasional-bussiness">
            Internasional Bussiness
          </NavLink>
          <NavLink href="/akademik/tourism-hospitality">{`Tourism & Hospitality`}</NavLink>
          <NavLink href="/akademik/visual-communication-design">
            Visual Communication Design
          </NavLink>
        </Box>
      </Collapse>
    </>
  )
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const { pathname } = useRouter()

  const [, group] = href.split('/')
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
        fontWeight={isActive ? 'semibold' : 'medium'}
        bg={isActive ? 'lightPurple.900' : 'transparent'}
        color="white"
        _hover={{
          bg: 'lightPurple.900',
        }}
      >
        {children}
      </Center>
    </NextLink>
  )
}

const MobileNavContent: FC<MobileNavContentProps> = (props) => {
  const { isOpen, onClose } = props
  const closeBtnRef = useRef<HTMLButtonElement>(null)

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
                  <CloseButton
                    color="white"
                    ref={closeBtnRef}
                    onClick={onClose}
                  />
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
            </Flex>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  )
}

const MobileNavButton = forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: 'flex', md: 'none' }}
        aria-label="Mobile Nav"
        fontSize="20px"
        color="white"
        variant="ghost"
        icon={<AiOutlineMenu />}
        {...props}
      />
    )
  }
)

export { MobileNavContent, MobileNavButton }
