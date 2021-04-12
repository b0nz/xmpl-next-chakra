import { FC } from 'react'
import Slider from '@farbenmeer/react-spring-slider'
import { IconButton, Skeleton } from '@chakra-ui/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useQuery } from '@apollo/client'
import QUERY_SLIDERS from '../../schema/querySliders.graphql'

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

export const Hero: FC = () => {
  const { data, loading } = useQuery(QUERY_SLIDERS)

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
              backgroundColor: '#fff',
              width: '10px',
              height: '10px',
            }}
            ArrowComponent={customArrow}
          >
            {data && data.sliders.length > 0
              ? data.sliders.map((item) => (
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
