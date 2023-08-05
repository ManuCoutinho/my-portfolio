import React from 'react'
import { fireEvent, renderHook, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { render } from '__mocks__/customRender'
import { customWrapper } from '__mocks__/wrapper'
import { setupIntersectionObserverMock } from '__mocks__/intersectionObserver'
import Portfolio from '.'
import { useData } from 'hooks/useData'

jest.spyOn(React, 'useState')
jest.spyOn(React, 'useRef')
describe('<Portfolio/>', () => {
	beforeEach(() => setupIntersectionObserverMock)
	it('should render a ui component correctly', async () => {
		const { result } = renderHook(() => useData(), { wrapper: customWrapper() })
		act(() => {
			render(<Portfolio />)
		})

		expect(
			await screen.findByRole('heading', { name: /projetos/i })
		).toBeInTheDocument()
		expect(result.current.data).not.toBeUndefined()
		const trigger = screen.getAllByRole('button')[0]
		expect(trigger).toHaveAttribute('data-state', 'closed')
		expect(screen.getByAltText(/mock img/i)).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /project/i })
		).toBeInTheDocument()

		act(() => {
			fireEvent.click(trigger)
		})

		expect(await screen.findByRole('dialog')).toBeInTheDocument()
	})

	it('should render load more button correctly', async () => {
		render(<Portfolio />)
		expect(
			await screen.findByRole('button', { name: /mostrar menos/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('button', { name: /mostrar mais/i })
		).toBeInTheDocument()
	})
})
