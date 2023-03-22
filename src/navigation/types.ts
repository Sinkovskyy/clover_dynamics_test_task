import { RouteProp } from '@react-navigation/native'
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { TMainDrawer } from './drawers/Main/types'
import { TMainStack } from './stacks'
import { TMainTab } from './tabs/Main/types'

/**
 * Description: use navigation.d.ts global type navigation
 */
export type TScreensList = TMainDrawer & TMainTab & TMainStack

/**
 * Description: use for Screens props
 * @param Screen - Screen name. For this param use EScreens
 * @return Return types for screen params
 */
export type TScreenProps<Screen extends keyof TScreensList> =
  NativeStackScreenProps<TScreensList, Screen>

/**
 * Description: use for useRoute hook
 * @param Screen - Screen name. For this param use EScreens
 * @return Return types for useRoute hook
 */
export type TScreenQueryProps<Screen extends keyof TScreensList> = RouteProp<
  TScreensList,
  Screen
>

export type TScreenNavigation<Screen extends keyof TScreensList> =
  NativeStackNavigationProp<TScreensList, Screen>
