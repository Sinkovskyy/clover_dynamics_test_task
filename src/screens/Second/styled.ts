import { EColors } from '@/common/styles'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    paddingHorizontal: 10,
  },
})

export const RefreshButtonTitle = styled(Text)`
  color: ${EColors.white};
`

export const RefreshButton = styled(TouchableOpacity)`
  background-color: ${EColors.first};
  margin: 40px 0px;
  width: 100%;
  height: 40px;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`
