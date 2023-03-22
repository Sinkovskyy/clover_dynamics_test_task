import React, { ReactNode } from 'react'
import { SafeAreaViewProvider } from './SafeAreaView'

type TContextProvider = {
  children: ReactNode
}

export const ContextProvider = ({ children }: TContextProvider) => {
  return (
    <>
      <SafeAreaViewProvider>{children}</SafeAreaViewProvider>
    </>
  )
}
