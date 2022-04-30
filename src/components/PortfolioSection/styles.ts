import styled from 'styled-components'

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
  background: ${({ theme }) => theme.colors.bg_card};
  width: 100%;
  padding: 1rem 1rem 2rem 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transition};
  
  box-shadow: -2px -5px 10px ${({ theme }) => theme.colors.highlight};
  -webkit-box-shadow: -2px -5px 10px ${({ theme }) => theme.colors.highlight};
  
  &:nth-child(n + 5) {
    visibility: hidden;
  }
  img {
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transition: ${({ theme }) => theme.transition};
    box-shadow: 4px 10px 10px ${({ theme }) => theme.colors.highlight};
    -webkit-box-shadow: 4px 10px 10px ${({ theme }) => theme.colors.highlight};
  }
  h3:first-letter {
    text-transform: capitalize;
  }
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.info};
  line-height: 1.35rem;
  break-word: break-word;
  user-select: none;
`

export { CardComponent, Description, Grid, PortfolioSection }
