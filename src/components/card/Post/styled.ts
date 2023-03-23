import { EColors } from '@/common/styles'
import { Text, View } from 'react-native'
import styled from 'styled-components'

export const Container = styled(View)`
  margin: 20px 15px;
  padding: 15px;

  background-color: ${EColors.second};
`

export const Title = styled(Text)`
  font-size: 25px;
  font-weight: 500;
`

export const Info = styled(Text)`
  font-size: 18px;
`
