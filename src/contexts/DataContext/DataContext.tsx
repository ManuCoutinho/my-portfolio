import { createContext, useEffect, useState } from 'react'
import { IDataContext } from './types'
import PROJECTS from 'data/projects'
import initialState from 'constants/initialState'

const DEFAULT_CONTEXT: IDataContext = {
  data: [initialState]
}

export const DataContext = createContext<IDataContext>(DEFAULT_CONTEXT)

export const DataContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [data, setData] = useState(DEFAULT_CONTEXT.data)

  useEffect(() => {
    const projects = PROJECTS.map((data) => {
      return {
        name: data.name,
        description: data.description,
        site: data.site,
        repo: data.repo,
        styles: data.styles,
        api: data?.api,
        framework: data?.framework,
        id: data.id,
        tools: data?.tools,
        coverDefaultLight: data.coverDefaultLight,
        coverDefaultDark: data.coverDefaultDark,
        coverAltLight: data.coverAltLight,
        coverAltDark: data.coverAltDark,
        alt: data.alt,
        route: data.route,
        img: data.img,
        doc: data?.doc
      }
    })

    setData(projects)
  }, [])

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}
