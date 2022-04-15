import { useState } from 'react'
import Lottie from 'react-lottie'

type AnimationProps = {
  data: unknown
}
export function LottieAnimation({ data }: AnimationProps) {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  })
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Lottie
      options={defaultOptions}
      height={'auto'}
      isStopped={animationState.isStopped}
      isPaused={animationState.isPaused}
    />
  )
}
