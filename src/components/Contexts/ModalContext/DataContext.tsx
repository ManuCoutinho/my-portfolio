import { createContext, useEffect, useState } from 'react'
import { IDataContext } from './types'
import PROJECTS from '../../PortfolioSection/Projects'

const DEFAULT_CONTEXT = {
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

export const ModalContext = createContext<IDataContext>(DEFAULT_CONTEXT)

export const ModalContextProvider: React.FC = ({ children }) => {
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
        img: data.img
      }
    })

    setData(projects)
  }, [])

  return (
    <ModalContext.Provider value={{ data }}>{children}</ModalContext.Provider>
  )
}
