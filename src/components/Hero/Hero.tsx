import Slider from '@farbenmeer/react-spring-slider'
import { IconButton } from '@chakra-ui/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const images = [
	"https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const imageStyle = (src: string) => ({
	backgroundSize: "cover",
	backgroundImage: `url(${src})`,
	height: "100%",
	width: "100%",
});

const customArrow = ({ onClick, direction }) => direction === "left" ? (
  <IconButton variant="ghost" aria-label="hero arrow left" onClick={onClick}>
    <FiChevronLeft color="white" size={30} />
  </IconButton>
) : (
  <IconButton variant="ghost" aria-label="hero arrow right" onClick={onClick}>
    <FiChevronRight color="white" size={30} />
  </IconButton>
)

export const Hero = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Slider
        hasBullets
        hasArrows
        auto={5000}
        bulletStyle={{ backgroundColor: "#fff", width: '10px', height: '10px' }}
        ArrowComponent={customArrow}
      >
        {images.map((image) => (
          <div
            key={image}
            draggable="false"
            style={imageStyle(image)}
          />
        ))}
      </Slider>
    </div>
  )
}
