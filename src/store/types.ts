import rootReducer from './reducer'

export type TRootState = ReturnType<typeof rootReducer>

export enum EStoreReducer {
  button = 'button',
}
