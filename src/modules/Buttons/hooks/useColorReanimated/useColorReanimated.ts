import { EColors } from '@/common/styles'
import { useState } from 'react'
import {
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import { colors } from '../../colors'
import { buttonConfig } from '../../config'

type TUseColorReanimated = {
  color: EColors
}

export const useColorReanimated = ({ color }: TUseColorReanimated) => {
  const [aValue, setAValue] = useState(colors.indexOf(color))

  const animatedStyles = useAnimatedStyle(() => {
    let inputRange = [...Array(colors.length).keys()]

    const backgroundColor = interpolateColor(aValue, inputRange, colors)

    return {
      backgroundColor: withTiming(backgroundColor, {
        duration: buttonConfig.animation.duration,
      }),
    }
  }, [aValue])

  const onAnimationChange = () => {
    const toValue = (aValue + 1) % colors.length
    setAValue(toValue)
  }

  return { animatedStyles, color: colors[aValue], onAnimationChange }
}
