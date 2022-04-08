import { useState } from 'react'
import Lottie from 'react-lottie'
import * as animationData from './animation.json'

import { DivWrapper } from './styles'

export function AnimationBanner(): JSX.Element {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  })
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <DivWrapper>
      <Lottie
        options={defaultOptions}
        height={'auto'}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
    </DivWrapper>
  )
}
