import { screen, waitFor } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import mockRouter from 'next-router-mock'
import Layout from '.'

jest.mock('next/router', () => require('next-router-mock'))
describe('<Layout />', () => {
	beforeEach(() => {
		mockRouter.setCurrentUrl('/')
		mockRouter.asPath
	})
	it('should render the Layout component correctly and match to snapshot', async () => {
		const { container } = render(
			<Layout>
				<p>children</p>
			</Layout>
		)
		await waitFor(() =>
			expect(screen.getByRole('navigation')).toBeInTheDocument()
		)
		expect(screen.getByText('children')).toBeInTheDocument()

		expect(screen.getByRole('contentinfo')).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})
})
