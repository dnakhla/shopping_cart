import discounts from '../../data/discounts' // imports discounts from data folder

/**
 * List of exported actions which once triggered will pass payload to reducer dependent on type
 */

export function loadDiscounts() {
  return {
    type: 'LOAD_DISCOUNTS',
    payload: discounts
  }
}

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

export function calcTotal() {
  return {
    type: 'CALC_TOTAL'
  }
}

export function setVoucher(value) {
  return {
    type: 'SET_CODE',
    payload: {
      voucherCode: value
    }
  }
}

export function applyDiscount() {
  return {
    type: 'APPLY_DISCOUNT'
  }
}


