import items from '../../data/products' // imports discounts from data folder

/**
 * List of exported actions which once triggered will pass payload to reducer dependent on type
 */
export function loadProducts() {
  return {
    type: 'LOAD_PRODUCTS',
    payload: items
  }
}

export function reduceStock(product) {
  return {
    type: 'REDUCE_STOCK',
    payload: {
      id: product.product.id
    }
  }
}

export function addStock(product) {
  return {
    type: 'ADD_STOCK',
    payload: {
      id: product.product.id
    }
  }
}

export function resetStock() {
  return {
    type: 'RESET_STOCK'
  }
}