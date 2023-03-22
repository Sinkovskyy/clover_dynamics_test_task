import React, { ReactNode } from 'react'
import { StyledSafeAreaView } from './styled'

type TSafeAreaViewProvider = {
  children?: ReactNode
}

export const SafeAreaViewProvider = ({ children }: TSafeAreaViewProvider) => {
  return (
    <>
      <StyledSafeAreaView>{children}</StyledSafeAreaView>
    </>
  )
}
