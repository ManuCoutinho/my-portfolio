import styled, { keyframes, css } from 'styled-components'

const rotateImg = keyframes`
0%{
    transform: rotateY(0deg);
  }
  25%{
    transform: rotateY(60deg);
  }
  50%{
    transform: rotateY(180deg);
  }
  75%{
    transform: rotateY(240deg);

  }
  100%{
    transform: rotateY(360deg);
  }
`

export const Section = styled.section`
  width: 100%;
  padding: 1.5rem 0.5rem;
  margin: 0 auto;
`

export const Container = styled.div`
  ${() => css`
    @media only screen and (max-width: 48em) {
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 4rem 0;
  `}
`
const imgAnimation = css`
  animation: ${rotateImg} 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) 1s 2 both;
`

export const WrapperImg = styled.div<{ animate: boolean }>`
  ${({ animate }) => css`
    width: 100%;
    display: grid;
    place-content: center;
    ${animate && imgAnimation};
    img {
      filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.15));
    }
  `}
`
