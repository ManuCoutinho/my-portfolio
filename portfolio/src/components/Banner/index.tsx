import Typed from 'react-typed'
import { AnimationBanner } from './AnimationBanner'

import { Container, DivWrapper } from './styles'

export function Banner(): JSX.Element {
  const texts = ['woman', 'developer', 'front-end', 'Manu!']

  return (
    <Container>
      <DivWrapper>
        <p>Hi, I am </p>
        <Typed
          strings={texts}
          typeSpeed={150}
          loop
          backSpeed={100}
          backDelay={7}
          smartBackspace
        />
      </DivWrapper>
      <AnimationBanner />
    </Container>
  )
}
