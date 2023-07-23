import { useState, FC, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useData } from 'hooks/useData'

import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { Polaroids } from 'features/Polaroids'

import projects from 'data/projects'
import * as Styled from './styles'
import { useAnimate } from 'hooks/useAnimate'

const LIMIT = 6
const TOTAL = projects.length

const Portfolio: FC = () => {
	const { data: info } = useData()
	const portfolioRef = useRef<HTMLDivElement>(null)
	const { onAnimate } = useAnimate(portfolioRef)
	const [limit, setLimit] = useState(LIMIT)
	const data = info.slice(0, limit)

	function handleLimit() {
		limit <= TOTAL && setLimit(limit + 3)
	}

	return (
		<Styled.PortfolioSection id='portfolio' ref={portfolioRef}>
			<Heading as='h2' size='big'>
				Portfólio
			</Heading>
			<Styled.Grid>
				{data.map((project) => (
					<Polaroids key={uuidv4()} data={project} animate={onAnimate} />
				))}
			</Styled.Grid>
			<Styled.BoxButtons>
				{data?.length === LIMIT ? null : (
					<Button
						size='sm'
						variant='outline'
						onClick={() => setLimit(limit - 3)}
					>
						Mostrar menos
					</Button>
				)}
				{data?.length === TOTAL ? null : (
					<Button onClick={handleLimit} size='sm' variant='outline'>
						Mostrar mais
					</Button>
				)}
			</Styled.BoxButtons>
		</Styled.PortfolioSection>
	)
}

export default Portfolio
