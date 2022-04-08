import styled from 'styled-components'

export const MyWorks = styled.button`
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default};
  background-color: ${({ theme }) => theme.colors.info};
  border: 0;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: 1.3rem;
  padding: 1rem;
  outline: 0;
  transition: ${({ theme }) => theme.transition};
  width: 24rem;

  &:hover {
    filter: brightness(0.8);
    transition: ${({ theme }) => theme.transition};
  }

  @media only screen and (max-width: 25em) {
    width: 100%;
    padding: 1rem 1.3rem;
  }
`
