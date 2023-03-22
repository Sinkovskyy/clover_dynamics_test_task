import { EColors } from '@/common/styles'
import { EStoreReducer } from '@/store/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TInitialState, TSetButtonPaylod } from './types'

const initialState: TInitialState = {
  first: { color: EColors.first },
  second: { color: EColors.first },
  third: { color: EColors.first },
}

export const slice = createSlice({
  name: EStoreReducer.button,
  initialState,
  reducers: {
    setButtonColor: (state, { payload }: PayloadAction<TSetButtonPaylod>) => {
      const { name, color } = payload
      state[name] = { ...state[name], color }
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
