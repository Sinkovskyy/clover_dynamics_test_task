import { TScreens } from '@app/navigation'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TScreens {}
  }
}
