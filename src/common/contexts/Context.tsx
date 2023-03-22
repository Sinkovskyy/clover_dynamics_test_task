import { store } from '@/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { SafeAreaViewProvider } from './SafeAreaView'

type TContextProvider = {
  children: ReactNode
}

export const ContextProvider = ({ children }: TContextProvider) => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaViewProvider>{children}</SafeAreaViewProvider>
      </Provider>
    </>
  )
}
