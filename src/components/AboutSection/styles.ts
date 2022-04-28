import styled from 'styled-components'

const AboutSection = styled.section`
  width: 100%;
  padding: 1.5rem 0.5rem;
  margin: 0 auto;
`
const ContainerAbout = styled.div`
  @media only screen and (max-width: 48em) {
    flex-direction: column;
    gap: 2rem;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 4rem 0;

  img {
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.15));
  }

  -webkit-animation: fadeInFwd 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fadeInFwd 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @keyframes fadeInFwd {
    0% {
      -webkit-transform: translateZ(-80px);
      transform: translateZ(-80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`

export { AboutSection, ContainerAbout }
