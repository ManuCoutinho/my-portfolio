import Typed from 'react-typed'

import { BoxAnimation } from './styles'

export function TextAnimated(): JSX.Element {
  const texts = ['frontend', 'developer', 'Manu! ']

  return (
    <BoxAnimation>
      <p>Hi, I am </p>
      <Typed
        strings={texts}
        typeSpeed={500}
        loop
        backSpeed={100}
        backDelay={7}
        smartBackspace
      />
    </BoxAnimation>
  )
}
