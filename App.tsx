/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react'
import { Navigator } from '@/navigation'
import { ContextProvider } from '@/common/contexts'

const App = () => {
  return (
    <>
      <ContextProvider>
        <Navigator />
      </ContextProvider>
    </>
  )
}

export default App
