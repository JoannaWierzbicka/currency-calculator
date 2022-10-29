import { combineReducers } from 'redux'

import reducerUserData from './userData'
import reducerApiData from './apiData'

export const reducers = combineReducers({
  userData: reducerUserData,
  apiData: reducerApiData
})

export default reducers
