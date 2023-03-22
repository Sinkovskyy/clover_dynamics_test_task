import React from 'react'
import { ETabs, MainTab } from '@/navigation/tabs'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import { MainDrawerOptions } from '../options'
import { Drawer as DrawerComponent } from '@/components/drawer'
import { TMainDrawer } from './types'

const Drawer = createDrawerNavigator<TMainDrawer>()

const drawerContent = (props: DrawerContentComponentProps) => (
  <DrawerComponent.Standart {...props} />
)

export const MainDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ETabs.Main}
      drawerContent={drawerContent}
      screenOptions={{
        ...MainDrawerOptions,
      }}>
      <Drawer.Screen name={ETabs.Main} component={MainTab} />
    </Drawer.Navigator>
  )
}
