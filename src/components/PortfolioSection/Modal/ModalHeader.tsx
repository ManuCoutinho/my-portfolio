import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { LinkInternal, Subtitle } from '../../Layout/Base'
import { BoxInfos, ModalHeader as Header, ContainerHeader } from './styles'

export const ModalHeader: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  const { asPath } = useRouter()

  let isOverview = false
  let isDetails = false

  asPath === '/#details' ? (isDetails = true) : (isDetails = false)
  asPath === '/#overview' ? (isOverview = true) : (isOverview = false)

  return (
    <Header
      color1={isOverview ? `${colors.primary}` : `${colors.text}`}
      color2={isDetails ? `${colors.primary}` : `${colors.text}`}
    >
      <ContainerHeader>
        <Subtitle>Excursionista</Subtitle>
        <BoxInfos>
          <Link href='#overview' passHref>
            <LinkInternal>Visão geral</LinkInternal>
          </Link>
          <Link href='#details' passHref>
            <LinkInternal>Detalhes</LinkInternal>
          </Link>
        </BoxInfos>
      </ContainerHeader>
    </Header>
  )
}
