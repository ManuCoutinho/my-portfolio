import { DataContext } from 'contexts/DataContext'
import mockData from '__mocks__/data'

export function DataProviderMock({ children }: { children: React.ReactNode }) {
	const data = [mockData]
	return (
		<DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
	)
}
