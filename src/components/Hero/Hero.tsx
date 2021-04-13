import { FC } from 'react'
import Slider from '@farbenmeer/react-spring-slider'
import { IconButton, Skeleton } from '@chakra-ui/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const images = ['/blank.jpg']

const imageStyle = (src: string) => ({
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${src})`,
  backgroundColor: '#2b2b2b',
  height: '100%',
  width: '100%',
})

const customArrow = ({ onClick, direction }) =>
  direction === 'left' ? (
    <IconButton variant="ghost" aria-label="hero arrow left" onClick={onClick}>
      <FiChevronLeft color="white" size={30} />
    </IconButton>
  ) : (
    <IconButton variant="ghost" aria-label="hero arrow right" onClick={onClick}>
      <FiChevronRight color="white" size={30} />
    </IconButton>
  )

interface HeroProps {
  data?: any
  loading?: boolean
}

export const Hero: FC<HeroProps> = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <Skeleton height={600} />
      ) : (
        <div style={{ width: '100%', height: 400 }}>
          <Slider
            hasBullets
            hasArrows
            auto={5000}
            bulletStyle={{
              backgroundColor: '#d4d4d4',
              width: '10px',
              height: '10px',
            }}
            ArrowComponent={customArrow}
          >
            {data && data.length > 0
              ? data.map((item) => (
                  <div
                    key={item.id}
                    draggable={false}
                    style={imageStyle(
                      `${process.env.NEXT_PUBLIC_BASE_URL}${item.image.url}`
                    )}
                  />
                ))
              : images.map((item) => (
                  <div key={item} draggable={false} style={imageStyle(item)} />
                ))}
          </Slider>
        </div>
      )}
    </>
  )
}
