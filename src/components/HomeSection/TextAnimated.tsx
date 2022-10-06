import { useRef, useEffect } from 'react'
import Typed from 'typed.js'

import { BoxAnimation } from './styles'

export function TextAnimated(): JSX.Element {
  const text = useRef(null)

  useEffect(() => {
    if (text.current !== null) {
      const typed = new Typed(text.current, {
        strings: ['frontend', 'developer', 'Manu! '],
        startDelay: 300,
        typeSpeed: 110,
        backSpeed: 150,
        backDelay: 130,
        loop: true,
        smartBackspace: true
      })
      return () => {
        typed.destroy()
      }
    }
  }, [text])
  return (
    <BoxAnimation>
      <p>Hi, I am </p>
      <span ref={text} id='animated' />
    </BoxAnimation>
  )
}
