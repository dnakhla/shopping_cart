'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    products: [],
    error: null
  };
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_PRODUCT':
      {}
    case 'REMOVE_PRODUCT':
      {
        return {};
      }
  }
}

//# sourceMappingURL=productReducer-compiled.js.map