import { EColors } from '@/common/styles'

export type TButtonNames = 'first' | 'second' | 'third'

export type TButton = {
  color: EColors
}

export type TInitialState = Record<TButtonNames, TButton>

export type TSetButtonPaylod = {
  name: TButtonNames
  color: EColors
}
