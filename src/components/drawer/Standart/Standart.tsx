import { EScreens } from '@/navigation'
import { useNavigation } from '@react-navigation/core'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'

import React from 'react'
import { styles } from './styled'

const screens = [
  {
    name: EScreens.First,
  },
  {
    name: EScreens.Second,
  },
]

export const Standart = ({ ...props }: DrawerContentComponentProps) => {
  const { navigate } = useNavigation()

  const onDrawerItemPress = (screen: EScreens) => {
    navigate(screen)
  }

  return (
    <>
      <DrawerContentScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={[styles.contentContainerStyle]}
        {...props}>
        {screens.map(screen => (
          <DrawerItem
            key={screen.name}
            label={screen.name}
            onPress={() => onDrawerItemPress(screen.name)}
          />
        ))}
      </DrawerContentScrollView>
    </>
  )
}
