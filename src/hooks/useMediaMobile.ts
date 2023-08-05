import React from 'react'

export function useMediaMobile() {
	const [isTouchDevice, setIsTouchDevice] = React.useState(false)
	React.useLayoutEffect(() => {
		if (typeof window !== 'undefined' && window.innerWidth <= 830) {
			setIsTouchDevice(true)
		}
	}, [])

	return { isTouchDevice }
}
