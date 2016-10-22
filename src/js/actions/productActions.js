import items from '../../../data/products'
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