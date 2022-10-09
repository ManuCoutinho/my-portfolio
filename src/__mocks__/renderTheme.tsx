import { ReactElement, ReactNode, FC } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeContextProvider } from 'contexts/ThemeContext'

const MockProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: MockProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
