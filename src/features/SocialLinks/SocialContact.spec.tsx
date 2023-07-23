import { screen } from '@testing-library/react'
import { render } from '../../__mocks__/customRender'
import { SocialContacts } from '.'

describe('<SocialContacts/>', () => {
	it('should render Social Contacts with display column', () => {
		render(<SocialContacts direction='column' />)
		expect(screen.getByRole('navigation')).toHaveStyle('flex-direction: column')
	})
	it('should render Social Contacts with display row', () => {
		render(<SocialContacts direction='row' />)
		expect(screen.getByRole('navigation')).toHaveStyle('flex-direction: row')
	})
	it('should render with email icon correctly', () => {
		render(<SocialContacts direction='row' showEmail />)

		expect(screen.getByRole('link', { name: 'Email' })).toBeInTheDocument()
	})
	it('should render without toggle icon', () => {
		render(<SocialContacts direction='row' showToggle />)
		expect(screen.getByRole('switch')).toBeInTheDocument()
	})
})
