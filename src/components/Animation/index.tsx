import Lottie from 'lottie-react'

function LottieAnimation({ data }: { data: unknown }) {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: data
	}

	return <Lottie {...defaultOptions} data-testid='box-animation' />
}

export default LottieAnimation
