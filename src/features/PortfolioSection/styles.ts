import styled, { css, keyframes } from 'styled-components'

const animate = keyframes`
0% 
   {
      transform: rotate(0deg);
   }
   100%
   {
      transform: rotate(360deg);
   }
`
const PortfolioSection = styled.section`
  margin: 5rem auto;
`

const Grid = styled.div`
  max-width: clamp(80vw 1180px 100%);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  margin: auto;
  justify-content: center;
  grid-gap: 5rem;
  padding: 1.6rem;
`

const CardComponent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.bg_card};
    max-width: 19rem;
    width: 100%;
    padding: 1rem 1rem 2rem 1rem;
    margin: 0 auto;
    display: flex;
    border: 2px solid ${theme.colors.highlight};
    flex-direction: column;

    border-radius: ${theme.radius.small};
    transition: ${theme.transition};
    position: relative;
    overflow: hidden;

    border-radius: ${({ theme }) => theme.radius.small};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      box-shadow: -1px 1px 5px 1px ${theme.colors.highlight};
    }

    h3:first-letter {
      text-transform: capitalize;
      -webkit-text-shadow: -2px 2px 2px ${theme.colors.white};
    }
  `}
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.info};
  line-height: 1.35rem;
  //break-word: break-word;
  user-select: none;
`
const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

const Image = styled.div`
  height: 17.5rem;

  picture,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export { BoxButtons, CardComponent, Description, Grid, PortfolioSection, Image }
