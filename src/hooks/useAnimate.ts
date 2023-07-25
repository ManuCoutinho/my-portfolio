import React from 'react'

export function useAnimate(ref: React.RefObject<HTMLDivElement>) {
	const [onAnimate, setOnAnimate] = React.useState(false)

	React.useEffect(() => {
		function listenScrollToImg() {
			const imgOffsetWidth = ref.current && ref.current.offsetTop - 600

			const winScroll = document.documentElement.scrollTop

			if (imgOffsetWidth != null && winScroll > imgOffsetWidth) {
				setOnAnimate(true)
			}

			if (imgOffsetWidth != null && winScroll < imgOffsetWidth) {
				setOnAnimate(false)
			}
		}

		window.addEventListener('scroll', () => listenScrollToImg())

		return window.removeEventListener('scroll', () => listenScrollToImg())
	}, [ref])

	return { onAnimate }
}
