import styled, { css, keyframes } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

const showOverlay = keyframes`
  from { 
    opacity: 0;
  }
    to { 
      opacity: 1; 
    }
`

const showContent = keyframes`
  from { 
    opacity: 0;
    transform: translate(-50%, 48%) scale(.96);
  }
    to { 
      opacity: 1; 
      transform: translate(-50%, -50%) scale(1);
    }
`

export const Overlay = styled(Dialog.Overlay)`
  ${() => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${showOverlay} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
  `}
`
export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    background: ${theme.colors.bg_modal};
    border-radius: ${theme.radius.medium};
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(800px, 80%, 90vw);
    height: clamp(600px, 85vh, 90%);
    z-index: 1000;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${showContent} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    &:focus {
      outline: 0;
    }
  `}
`
export const Close = styled(Dialog.Close)`
  ${({ theme }) => css`
    background: ${theme.colors.bg_modal};
    border-radius: ${theme.radius.full};
    width: 2rem;
    height: 2rem;
    display: grid;
    place-content: center;
    padding: 0.25rem;
    cursor: pointer;
    border: 0;
    outline: 0;
    position: absolute;
    right: -0.25rem;
    top: -0.35rem;
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors.primary};
  `}
`
export const Portal = Dialog.Portal
