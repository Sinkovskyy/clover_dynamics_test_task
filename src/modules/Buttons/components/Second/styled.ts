import { Animated } from 'react-native'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { buttonConfig } from '../../config'

const AnimatedTouchbleOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)

export const StyledButton = styled(AnimatedTouchbleOpacity)`
  width: ${buttonConfig.width}px;
  height: ${buttonConfig.height}px;
`
