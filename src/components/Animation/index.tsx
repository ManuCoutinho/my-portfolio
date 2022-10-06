import Lottie from 'lottie-react'

type AnimationProps = {
  data: unknown
}
export function LottieAnimation({ data }: AnimationProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice'
    // }
  }

  return <Lottie {...defaultOptions} />
}
