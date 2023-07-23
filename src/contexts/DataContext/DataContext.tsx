import { createContext, useEffect, useState } from 'react'
import { ContextType } from '@models/data'
import PROJECTS from 'data/projects'
import initialState from 'constants/initialState'

const DEFAULT_CONTEXT: ContextType = {
	data: [initialState]
}

export const DataContext = createContext<ContextType>(DEFAULT_CONTEXT)

export const DataContextProvider: React.FC<{
	children: React.ReactNode
}> = ({ children }) => {
	const [data, setData] = useState(DEFAULT_CONTEXT.data)

	useEffect(() => {
		const projects = PROJECTS.map((data) => {
			return {
				...data
			}
		})

		setData(projects)
	}, [])

	return (
		<DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
	)
}
