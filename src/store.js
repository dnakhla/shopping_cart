import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger" // logs out state changes to console
import thunk from "redux-thunk" // helps deconstruct state in reducers

import reducer from "./reducers"

const middleware = applyMiddleware(thunk, logger())

export default createStore(reducer, middleware)