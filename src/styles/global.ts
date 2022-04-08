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
  -webkit-font: antialiased;  
}

body {
 background: ${({ theme }) => theme.colors.body};
 color: ${({ theme }) => theme.colors.text};
 transition: ${({ theme }) => theme.transition};
}

body, input, textarea, button {
 font-family: ${({ theme }) => theme.font.text}; 
 font-weight: ${({ theme }) => theme.fontWeight.normal};
 font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
 font-weight: ${({ theme }) => theme.fontWeight.bold};
 font-family: ${({ theme }) => theme.font.title}; 
}

a {
 text-decoration: none;
 color: inherit;
 cursor: pointer;  
}
`
export default GlobalStyle
