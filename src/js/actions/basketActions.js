export function addProduct(id) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      id: 'an ID'
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
