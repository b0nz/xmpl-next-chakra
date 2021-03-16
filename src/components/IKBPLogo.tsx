import { chakra } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

const IKBPLogo = ({ href }) => (
  <NextLink href={href} passHref>
    <chakra.a display="block" aria-label="Institut Kristen Bukit Pengharapan">
      <Image src="/IKBP.jpg" width={221} height={101} alt="ikbp" />
    </chakra.a>
  </NextLink>
);

export default IKBPLogo