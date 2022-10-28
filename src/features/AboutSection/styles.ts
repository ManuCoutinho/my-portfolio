import styled, { keyframes } from 'styled-components'

const fadeInFwd = keyframes`
 0% {
      transform: translateZ(-80px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
`
export const Section = styled.section`
  width: 100%;
  padding: 1.5rem 0.5rem;
  margin: 0 auto;
`
export const Container = styled.div`
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

  animation: ${fadeInFwd} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`
export const WrapperImg = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  img {
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.15));
  }
`
