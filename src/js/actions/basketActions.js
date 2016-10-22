export function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      product: product
    }
  }
}

export function removeProduct(prod) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      prod: prod
    }
  }
}

export function clearBasket() {
  return {
    type: 'CLEAR_BASKET'
  }
}
