import { useRef, useEffect, FC } from 'react'
import Typed from 'typed.js'

import * as Styled from './styles'

export const AnimatedText: FC = () => {
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
			return () => typed.destroy()
		}
	}, [text])
	return (
		<Styled.Wrapper data-testid='animated-text'>
			<p>Olá! Eu sou</p>
			<span ref={text} id='animated' />
		</Styled.Wrapper>
	)
}
