import { combineReducers } from 'redux'

import basket from './basketReducer'
import product from './productReducer'

/**
 * Combines reducers
 */
export default combineReducers({
  basket,
  product
})