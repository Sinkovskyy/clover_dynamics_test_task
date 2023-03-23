import { TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components'
import { buttonConfig } from '../../config'
import { TStyledButton } from './types'

const AnimatedTouchbleOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)

export const StyledButton = styled(AnimatedTouchbleOpacity)<TStyledButton>`
  width: ${buttonConfig.width}px;
  height: ${buttonConfig.height}px;

  background-color: ${({ color }) => color};
`
