import { combineReducers } from 'redux'

import basket from './basketReducer'
import product from './productReducer'
import load from './loadReducer'

export default combineReducers({
  basket,
  product,
  load,
})