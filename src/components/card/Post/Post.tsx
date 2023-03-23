import React from 'react'
import { Container, Info, Title } from './styled'

type TPost = {
  title: string
  info: string
}

export const Post = ({ title, info }: TPost) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Info>{info}</Info>
      </Container>
    </>
  )
}
