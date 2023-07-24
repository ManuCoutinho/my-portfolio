/* eslint-disable react/display-name */
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { DataProviderMock } from '__mocks__/providers/DataContext'

export const customWrapper = () => {
	return ({ children }: { children: React.ReactNode }) => (
		<ThemeContextProvider>
			<DataProviderMock>{children}</DataProviderMock>
		</ThemeContextProvider>
	)
}
