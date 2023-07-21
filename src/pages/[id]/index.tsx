import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Details = dynamic(() => import('templates/Details'))

const MobilePage: NextPage = () => {
  if (typeof window == 'undefined') {
    return null
  }

  return <Details />
}

export default MobilePage
