import { TScreensList } from '@/navigation'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TScreensList {}
  }
}
