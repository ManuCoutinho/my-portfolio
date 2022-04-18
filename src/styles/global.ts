import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
 @media (max-width: 67.5em){
   font-size: 93.75%;
 }

 @media (max-width: 45em){
   font-size: 87.5%;
 }
  
 @media (max-width: 27em) {
  html {
    font-size: 80%;
  }
}
}

body, html {
  scroll-behavior: smooth; 
  -webkit-scroll-behavior: smooth;
  -moz-scroll-behavior: smooth;
  -o-scroll-behavior: smooth;
  -ms-behavior: smooth;
  -webkit-font: antialiased;  
}

body {
 background: ${(props) => props.theme.colors.body};
 color: ${(props) => props.theme.colors.text};
 transition: ${(props) => props.theme.transition};
}

body, input, textarea, button {
 font-family: ${(props) => props.theme.font.text}; 
 font-weight: ${(props) => props.theme.fontWeight.normal};
 font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
 font-weight: ${(props) => props.theme.fontWeight.bold};
 font-family: ${(props) => props.theme.font.title}; 
}

a {
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

img[width][height],
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
