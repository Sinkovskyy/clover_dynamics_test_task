import { combineReducers } from '@reduxjs/toolkit'
import { buttonReducer } from './modules'
import { EStoreReducer } from './types'

export default combineReducers({ [EStoreReducer.button]: buttonReducer })
