import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainStack } from './stacks'

export const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}
