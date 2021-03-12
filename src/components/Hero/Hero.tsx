import {
  Flex,
  Image,
} from "@chakra-ui/react"
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export const Hero = () => {
  return (
    <Slider
      autoplay
      duration={5000}
      previousButton={null}
      nextButton={null}
    >
      <Flex justify="center" align="center" bg="black">
        <Image src="https://w.wallhaven.cc/full/rd/wallhaven-rd7drw.jpg" />
      </Flex>
      <Flex justify="center" align="center" bg="black">
        <Image src="https://w.wallhaven.cc/full/rd/wallhaven-rd7drw.jpg" />
      </Flex>
      <Flex justify="center" align="center" bg="black">
        <Image src="https://w.wallhaven.cc/full/rd/wallhaven-rd7drw.jpg" />
      </Flex>
    </Slider>
  )
}
