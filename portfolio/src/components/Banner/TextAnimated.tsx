import Typed from 'react-typed'

import { BoxAnimation } from './styles'

export function TextAnimated(): JSX.Element {
  const texts = ['woman ', 'developer', 'frontend', 'Manu! ']

  return (
    <BoxAnimation>
      <p>Hi, I am </p>
      <Typed
        strings={texts}
        typeSpeed={150}
        loop
        backSpeed={100}
        backDelay={7}
        smartBackspace
      />
    </BoxAnimation>
  )
}
