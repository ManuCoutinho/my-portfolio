import Image from 'next/image'

import { LinkInternal } from '../../../Layout/Base'
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselNav,
  List,
  ListItem
} from './styles'

const CarouselModal: React.FC = () => {
  return (
    <Container>
      <Carousel>
        <List>
          <ListItem>
            <CarouselItem id='slide-1'>
              <img src='https://source.unsplash.com/800x800' alt='' />
            </CarouselItem>
          </ListItem>
          <ListItem>
            <CarouselItem id='slide-2'>
              <img src='https://source.unsplash.com/random' alt='' />
            </CarouselItem>
          </ListItem>
          <ListItem>
            <CarouselItem id='slide-3'>
              <img src='https://source.unsplash.com/random' alt='' />
            </CarouselItem>
          </ListItem>
          <ListItem>
            <CarouselItem id='slide-4'>
              <img src='https://source.unsplash.com/800x800' alt='' />
            </CarouselItem>
          </ListItem>
          <ListItem>
            <CarouselItem id='slide-5'>
              <img src='https://source.unsplash.com/800x800' alt='' />
            </CarouselItem>
          </ListItem>
          <ListItem>
            <CarouselItem id='slide-6'>
              <img src='https://source.unsplash.com/random' alt='' />
            </CarouselItem>
          </ListItem>
        </List>
      </Carousel>
      <CarouselNav>
        <LinkInternal href='#slide-4' />
        <LinkInternal href='#slide-5' />
        <LinkInternal href='#slide-6' />
      </CarouselNav>
    </Container>
  )
}

export default CarouselModal
