import { EScreens } from '@/navigation/screens'
import { TFirstScreen } from '@/screens/First'
import { TSecondScreen } from '@/screens/Second'

export type TMainTab = {
  [EScreens.First]: TFirstScreen
  [EScreens.Second]: TSecondScreen
}
