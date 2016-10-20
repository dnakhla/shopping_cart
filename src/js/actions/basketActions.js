export function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      product: product
    }
  }
}

export function removeProduct(id) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      id: id
    }
  }
}

export function clearBasket() {
  return {
    type: 'CLEAR_BASKET',
    payload: ''
  }
}
