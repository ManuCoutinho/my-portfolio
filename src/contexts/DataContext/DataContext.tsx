import { createContext, useEffect, useState } from 'react'
import { IDataContext } from './types'
import PROJECTS from 'data/Projects'

const DEFAULT_CONTEXT: IDataContext = {
  data: [
    {
      name: '',
      description: '',
      site: '',
      repo: '',
      styles: '',
      api: '',
      framework: '',
      id: '',
      coverDefaultLight: '',
      coverDefaultDark: '',
      coverAltLight: '',
      coverAltDark: '',
      alt: '',
      route: '',
      img: [
        {
          imgPng: '',
          imgWebp: '',
          alt: '',
          id: ''
        }
      ]
    }
  ]
}

export const DataContext = createContext<IDataContext>(DEFAULT_CONTEXT)

export const DataContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(DEFAULT_CONTEXT.data)

  useEffect(() => {
    const projects = PROJECTS.map((data) => {
      return {
        name: data.name,
        description: data.description,
        site: data.site,
        repo: data.repo,
        styles: data.styles,
        api: data.api,
        framework: data.framework,
        id: data.id,
        tools: data.tools.join(' / '),
        coverDefaultLight: data.coverDefaultLight,
        coverDefaultDark: data.coverDefaultDark,
        coverAltLight: data.coverAltLight,
        coverAltDark: data.coverAltDark,
        alt: data.alt,
        route: data.route,
        img: data.img
      }
    })

    setData(projects)
  }, [])

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}