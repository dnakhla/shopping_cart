'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProduct = addProduct;
exports.removeProduct = removeProduct;
exports.clearBasket = clearBasket;
function addProduct(id) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      id: id
    }
  };
}

function removeProduct(id) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      id: id
    }
  };
}

function clearBasket() {
  return {
    type: 'CLEAR_BASKET',
    payload: ''
  };
}

//# sourceMappingURL=basketActions-compiled.js.map