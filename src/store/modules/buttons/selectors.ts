import { EStoreReducer, TRootState } from '../../types'

export const getButtonsSelector = (state: TRootState) =>
  state[EStoreReducer.button]
