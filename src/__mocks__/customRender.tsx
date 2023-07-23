import { ReactElement, FC, ReactNode } from 'react'
import { render } from '@testing-library/react'
import { RenderOptions } from '@testing-library/react/types'
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
