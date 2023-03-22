import { EDrawers } from '@/navigation/drawers'
import { TMainDrawer } from '@/navigation/drawers/Main/types'
import { NavigatorScreenParams } from '@react-navigation/core'

export type TMainStack = {
  [EDrawers.Main]: NavigatorScreenParams<TMainDrawer>
}
