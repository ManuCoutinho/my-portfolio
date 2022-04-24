import styled from 'styled-components'

const MyWorks = styled.button`
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default};
  background-color: ${({ theme }) => theme.colors.info};
  border: 0;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.25);
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
    padding: 0.5rem 1.3rem;
    font-size: 1rem;
  }
`

const ModalButton = styled.button`
  background: ${({ theme }) => theme.colors.bg_card};
  border: 1px solid ${({ theme }) => theme.colors.glass};
  border-radius: ${({ theme }) => theme.radius.small};
  margin-top: 0.5rem;
  padding: 0.5rem;
  outline: 0;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.glass};
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.colors.text};
    transition: ${({ theme }) => theme.transition};
  }
`

export { MyWorks, ModalButton }
