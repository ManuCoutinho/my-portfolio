import { useLottie } from 'lottie-react'

type AnimationProps = {
  data: React.ReactNode
}
export const LottieAnimation: React.FC<AnimationProps> = ({ data }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data
  }
  const { View } = useLottie(defaultOptions)

  return View
}

LottieAnimation.displayName = 'Animation'
