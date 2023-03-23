import { buttonActions, getButtonsSelector } from '@/store/modules'
import React, { useEffect } from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Hook } from '../../hooks'
import { styles } from './styled'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

export const First = () => {
  const { first } = useSelector(getButtonsSelector)
  const dispatch = useDispatch()

  const {
    animatedColor: backgroundColor,
    color,
    onAnimationChange,
  } = Hook.useColorAnimation({
    color: first.color,
  })

  const onButtonPress = () => {
    onAnimationChange()
  }

  useEffect(() => {
    dispatch(buttonActions.setButtonColor({ name: 'first', color }))
  }, [dispatch, color])

  return (
    <>
      <AnimatedTouchable
        onPress={onButtonPress}
        style={[styles.button, { backgroundColor }]}
      />
    </>
  )
}
