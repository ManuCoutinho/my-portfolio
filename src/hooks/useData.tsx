import { DataContext } from 'contexts/DataContext/DataContext'
import { useContext } from 'react'

export const useData = () => {
  const data = useContext(DataContext)
  return data
}
