import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TMainTab } from './types'
import { ScreenTabOptions } from '../options'
import { EScreens } from '@/navigation/screens'
import { Screens } from '@/screens'

const Tab = createBottomTabNavigator<TMainTab>()

export const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={EScreens.First}
      screenOptions={ScreenTabOptions}>
      <Tab.Screen name={EScreens.First} component={Screens.First} />
      <Tab.Screen name={EScreens.Second} component={Screens.Second} />
    </Tab.Navigator>
  )
}
