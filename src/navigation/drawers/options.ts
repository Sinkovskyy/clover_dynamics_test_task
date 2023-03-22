import { DrawerNavigationOptions } from '@react-navigation/drawer'

export const MainDrawerOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerType: 'front',
  swipeEnabled: true,

  drawerStyle: {
    width: 284,
    maxWidth: '100%',
    minWidth: '30%',
  },
}
