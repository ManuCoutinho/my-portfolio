import styled from 'styled-components'

const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;

  @media (max-width: 45em) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`
const StackBoxCenter = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
`
const StackBox = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.5rem;
  margin: 1.5rem 0;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: -2px -2px 5px ${({ theme }) => theme.colors.highlight};
`
const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.info};
  font-family: ${({ theme }) => theme.font.text};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: -1px;
  line-height: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;

  span {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`

const LinkInternal = styled.a``

export {
  Container,
  Box,
  Title,
  LinkInternal,
  StackBox,
  StackBoxCenter,
  Subtitle,
}
