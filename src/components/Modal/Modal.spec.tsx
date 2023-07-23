import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Root } from '@radix-ui/react-dialog'
import Modal from '.'

const onCloseMock = jest.fn(() => false)

const renderElement = () =>
	render(
		<Root modal open={true}>
			<Modal onClose={onCloseMock}>
				<p>Modal content</p>
			</Modal>
		</Root>
	)

describe('<Modal />', () => {
	it('should render the modal component correctly', async () => {
		renderElement()
		const modal = screen.getByRole('dialog')
		expect(modal).toHaveAttribute('data-state', 'open')
		expect(modal).toContainHTML('<p>Modal content</p>')
		expect(
			screen.getByRole('button', { name: /close-button/i })
		).toBeInTheDocument()
	})
})
