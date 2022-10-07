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
export const PortfolioSection = styled.section`
  margin: 5rem auto;
`

export const Grid = styled.div`
  max-width: clamp(80vw 1180px 100%);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  margin: auto;
  justify-content: center;
  grid-gap: 5rem;
  padding: 1.6rem;
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.info};
  line-height: 1.35rem;
  //break-word: break-word;
  user-select: none;
`
export const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

export const LoadButton = styled.button`
  ${({ theme }) => css`
    width: 10rem;
    background: ${theme.colors.bg_modal};
    border: 1px solid ${theme.colors.glass};
    border-radius: ${theme.radius.small};
    color: ${theme.colors.text};
    margin-top: 0.5rem;
    padding: 0.5rem;
    outline: 0;
    transition: ${theme.transition};

    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.15);

    &:hover {
      background: ${theme.colors.glass};
      transition: ${theme.transition};
    }
  `}
`
