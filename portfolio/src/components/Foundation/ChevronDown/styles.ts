import styled from 'styled-components'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'

export const ContainerArrow = styled.a`
  width: 70px;
  height: 70px;
  margin: 1rem 0;
  padding: 1rem;

  &:hover {
    -webkit-animation: slide-bottom 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1s
      infinite both;
    animation: slide-bottom 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1s
      infinite both;
  }

  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
    }
  }
`
export const ArrowDown = styled(HiOutlineChevronDoubleDown)`
  font-size: 1.3em;
`
