import { EColors } from '@/common/styles'
import { useRef, useState } from 'react'
import { Animated } from 'react-native'
import { colors } from '../../colors'
import { buttonConfig } from '../../config'

type TUseColorAnimation = {
  color: EColors
}

export const useColorAnimation = ({ color }: TUseColorAnimation) => {
  const translation = useRef(new Animated.Value(colors.indexOf(color))).current

  const [aValue, setAValue] = useState(colors.indexOf(color))

  const animatedColor = translation.interpolate({
    inputRange: [...Array(colors.length).keys()],
    outputRange: colors,
    extrapolateLeft: 'extend',
  })

  const onAnimationChange = () => {
    const toValue = (aValue + 1) % colors.length

    Animated.timing(translation, {
      toValue,
      duration: buttonConfig.animation.duration,
      useNativeDriver: false,
    }).start()

    setAValue(toValue)
  }

  return { animatedColor, color: colors[aValue], onAnimationChange }
}
