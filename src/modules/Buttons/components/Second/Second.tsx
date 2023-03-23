import { buttonActions, getButtonsSelector } from '@/store/modules'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Hook } from '../../hooks'
import { StyledButton } from './styled'

export const Second = () => {
  const { second } = useSelector(getButtonsSelector)

  const dispatch = useDispatch()

  const {
    animatedColor: backgroundColor,
    color,
    onAnimationChange,
  } = Hook.useColorAnimation({
    color: second.color,
  })

  const onButtonPress = () => {
    onAnimationChange()
  }

  useEffect(() => {
    dispatch(buttonActions.setButtonColor({ name: 'second', color }))
  }, [dispatch, color])

  return (
    <>
      <StyledButton style={{ backgroundColor }} onPress={onButtonPress} />
    </>
  )
}
