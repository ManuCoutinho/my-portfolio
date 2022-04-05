import { AnimationBanner } from './AnimationBanner'

import { Container, DivWrapper } from './styles'
import { TextAnimated } from './TextAnimated'

export function Banner(): JSX.Element {
  return (
    <Container>
      <DivWrapper>
        <TextAnimated />
        <AnimationBanner />
      </DivWrapper>
    </Container>
  )
}
