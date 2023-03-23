import { buttonActions, getButtonsSelector } from '@/store/modules'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Hook } from '../../hooks'
import { StyledButton } from './styled'

export const Third = () => {
  const dispatch = useDispatch()

  const { third } = useSelector(getButtonsSelector)

  const { animatedStyles, color, onAnimationChange } = Hook.useColorReanimated({
    color: third.color,
  })

  const onButtonPress = () => {
    onAnimationChange()
  }

  useEffect(() => {
    dispatch(
      buttonActions.setButtonColor({
        name: 'third',
        color,
      }),
    )
  }, [dispatch, color])

  return (
    <>
      <StyledButton
        onPress={onButtonPress}
        style={[animatedStyles]}
        color={animatedStyles.backgroundColor}
      />
    </>
  )
}
