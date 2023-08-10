import { createGlobalStyle, css } from 'styled-components'
import 'keen-slider/keen-slider.min.css'
import { lighten } from 'polished'

const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
	@media (max-width: 67.5em){
		font-size: 93.75%;
	}
	@media (max-width: 67.5em){
		font-size: 93.75%;
	}

	@media (max-width: 50em){
		font-size:85%;
	}
	@media (max-width: 50em){
		font-size:85%;
	}
  
	@media (max-width: 27em) {
		html {
			font-size: 80%;
		}
	}

}

body, html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  
}

body {
	${({ theme }) => css`
		background: ${theme.colors.body};
		color: ${theme.colors.text};
		transition: ${theme.transition};
		&::-webkit-scrollbar {
			width: 0.5rem;
			width: 0.5rem;
		}

		//* Track *//
		//* Track *//
		&::-webkit-scrollbar-track {
			background: ${theme.colors.body};
		}
		//*Handle *//
		//*Handle *//
		&::-webkit-scrollbar-thumb {
			background: ${lighten(0.05, theme.colors.accent)};
			border-radius: ${theme.radius.sm};
			background: ${lighten(0.05, theme.colors.accent)};
			border-radius: ${theme.radius.sm};
		}
		//*Handle on hover *//
		//*Handle on hover *//
		&::-webkit-scrollbar-thumb:hover {
			background: ${lighten(0.1, theme.colors.body)};
			background: ${lighten(0.1, theme.colors.body)};
		}
	`}
}

body, input, textarea, button {
	${({ theme }) => css`
		font-family: ${theme.font.cursive};
		font-weight: ${theme.fontWeight.regular};
		font-size: 16px;
	`}
}

h1, h2, h3, h4, h5, h6, strong {
	${({ theme }) => css`
		font-weight: ${theme.fontWeight.bold};
		font-family: ${theme.font.regular};
	`}
}

a {
	text-decoration: none;
	color: inherit;
	cursor: pointer;  
	text-decoration: none;
	color: inherit;
	cursor: pointer;  
}

button,
label {
  cursor: pointer;
}

sup,
sub {
  font-size: 50%;
}

img,
iframe,
object,
embed,
video {
  max-width: 100%;
}


iframe[width][height],
object[width][height],
embed[width][height],
video[width][height] {
  height: auto; /* Preserve aspect ratio */
}

img[width],
iframe[width],
object[width],
embed[width],
video[width] {
  width: auto; /* Defer to max-width */
}

:focus:not(:focus-visible) {
  outline: 0;
}
`

export default GlobalStyle
