import { LinkInternal as NavLink } from '../../../Layout/Base'
import { CarouselProps } from '../types'
import { Item, Items, ItemWrapper, CarouselNav } from './styles'

const CarouselModal: React.FC<CarouselProps> = ({ img }) => {
  return (
    <>
      <ItemWrapper>
        <Items>
          {img?.map((data) => {
            return (
              <Item id={data.id} key={Math.random() * 2563}>
                <picture>
                  <img
                    src={data.imgPng}
                    loading='lazy'
                    alt={data.alt}
                    width='500'
                    height='200'
                  />
                  <source srcSet={data.imgWebp} type='image/webp' />
                </picture>
              </Item>
            )
          })}
        </Items>
      </ItemWrapper>
      <CarouselNav>
        {img?.map((img) => (
          <NavLink href={`#${img.id}`} />
        ))}
      </CarouselNav>
    </>
  )
}

export default CarouselModal
