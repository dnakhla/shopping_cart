import { combineReducers } from 'redux'

import basket from './basketReducer'
import product from './productReducer'

export default combineReducers({
  basket,
  product,
})