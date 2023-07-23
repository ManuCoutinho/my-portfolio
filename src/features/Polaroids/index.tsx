import { useState, FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Root } from '@radix-ui/react-dialog'

import { useMediaMobile } from 'hooks/useMediaMobile'

import { Heading } from 'components/Heading'
import { CardContent } from 'features/Polaroids/ModalContent'

import * as Styled from './styles'
import { PolaroidsProps } from './types'

const Modal = dynamic(() => import('components/Modal'), { ssr: false })

export const Polaroids: FC<PolaroidsProps> = ({ animate, data }) => {
	const router = useRouter()
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const { isTouchDevice } = useMediaMobile()

	const handleCloseModal = () => {
		router.push('/#portfolio')
	}

	function handleOpenDetails() {
		isTouchDevice
			? router.push({
					pathname: `${data.id}`,
					query: { id: data.id }
			  })
			: setModalIsOpen(() => true)
	}

	return (
		<Root open={modalIsOpen} onOpenChange={setModalIsOpen} modal>
			<Styled.Wrapper
				direction='column'
				data-state={animate ? 'active' : 'inactive'}
			>
				<Styled.Polaroid onClick={handleOpenDetails}>
					<Styled.Picture>
						<picture>
							<Image
								loading='lazy'
								width={300}
								height={350}
								alt={data.alt}
								quality={80}
								src={data.coverAlt}
							/>
							<source srcSet={data.coverDefault} type='image/webp' />
						</picture>
					</Styled.Picture>
				</Styled.Polaroid>
				<Styled.Label>
					<Heading size='small' as='h3'>
						{data.name}
					</Heading>
				</Styled.Label>
			</Styled.Wrapper>

			<Modal onClose={handleCloseModal}>
				<CardContent {...data} />
			</Modal>
		</Root>
	)
}
