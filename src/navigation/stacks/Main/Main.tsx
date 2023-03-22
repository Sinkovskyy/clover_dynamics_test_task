import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TMainStack } from './types'
import { ScreenNavigationOptions } from '../options'
import { EDrawers, MainDrawer } from '@/navigation/drawers'

const Stack = createStackNavigator<TMainStack>()

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EDrawers.Main}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen component={MainDrawer} name={EDrawers.Main} />
    </Stack.Navigator>
  )
}
