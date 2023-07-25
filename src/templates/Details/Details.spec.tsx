import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import { render, renderHook } from '__mocks__/customRender'
import mockRouter from 'next-router-mock'
import DetailsTemplate from '.'
import { useData } from 'hooks/useData'
import { customWrapper } from '__mocks__/wrapper'

jest.mock('next/router', () => require('next-router-mock'))
jest.spyOn(React, 'useState')
describe('<DetailsTemplate />', () => {
	beforeEach(() => {
		mockRouter.setCurrentUrl('/?id=81j37ldd-3k344')
		mockRouter.asPath
	})
	it('should render the Details template correctly', async () => {
		const { result } = renderHook(() => useData(), { wrapper: customWrapper() })
		await waitFor(() => expect(result.current.data).not.toBeUndefined())
		const { container } = render(<DetailsTemplate />)
		expect(
			screen.getByRole('heading', { name: /project/i })
		).toBeInTheDocument()
		expect(
			await screen.findByRole('term', { name: /description/ })
		).toBeInTheDocument()
		expect(screen.getByText(/a belezura de test/i)).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /voltar/i })).toBeInTheDocument()
		expect(
			screen.getByRole('link', { name: /documentation/i })
		).toBeInTheDocument()
		expect(screen.getByRole('contentinfo')).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})
})
