'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _basketReducer = require('./basketReducer');

var _basketReducer2 = _interopRequireDefault(_basketReducer);

var _productReducer = require('./productReducer');

var _productReducer2 = _interopRequireDefault(_productReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  basket: _basketReducer2.default
  // product
});

//# sourceMappingURL=index-compiled.js.map