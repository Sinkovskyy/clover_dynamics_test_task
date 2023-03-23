import React from 'react'
import { Component } from './components'
import { Container } from './styled'

export const Buttons = () => {
  return (
    <>
      <Container>
        <Component.First />
        <Component.Second />
        <Component.Third />
      </Container>
    </>
  )
}
