import { EScreens } from '@/navigation/screens'
import { ETabs } from '@/navigation/tabs'
import { TMainTab } from '@/navigation/tabs/Main/types'
import { TFirstScreen } from '@/screens/First'
import { TSecondScreen } from '@/screens/Second'
import { NavigatorScreenParams } from '@react-navigation/native'

export type TMainDrawer = {
  [ETabs.Main]: NavigatorScreenParams<TMainTab>
  [EScreens.First]: TFirstScreen
  [EScreens.Second]: TSecondScreen
}
