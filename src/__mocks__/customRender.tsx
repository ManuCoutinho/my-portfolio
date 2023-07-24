import { ReactElement, FC, ReactNode } from 'react'
import { render } from '@testing-library/react'
import { RenderOptions } from '@testing-library/react/types'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { DataProviderMock } from './providers/DataContext'

const MockProviders: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ThemeContextProvider>
			<DataProviderMock>{children}</DataProviderMock>
		</ThemeContextProvider>
	)
}

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: MockProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
