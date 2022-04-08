import styled from 'styled-components'

const ContainerCarousel = styled.div`
  width: 100%;
  height: 15rem;
  padding: 1.5rem 2rem;
  margin: 1.5rem auto;
`

const Item = styled.div`
  border-radius: ${({ theme }) => theme.radius.medium};
  background: linear-gradient(45deg, #dedddb, #ffffff);
  box-shadow: 15px -15px 75px #cbcac7, -15px 15px 75px #ffffff;
  color: ${({ theme }) => theme.colors.secondary};
  width: 6.25rem;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;

  svg {
    font-size: ${({ theme }) => theme.fontSize.xlg};
  }
`

export { ContainerCarousel, Item }
