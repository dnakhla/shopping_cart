import * as actions from './productActions';

import items from '../../data/products' // imports discounts from data dir

describe('loadProducts()', () => {
  it('should create an action to load all products', () => {
    const expectedAction = {
      type: 'LOAD_PRODUCTS',
      payload: items
    }

    expect(actions.loadProducts()).toEqual(expectedAction)
  })
});

describe('addStock(product)', () => {
  it('should create an action to reduce the stock of a product', () => {
    const product = {
      "product": {
        "id": 6,
        "name": "Gold Button Cardigan, Black",
        "image": "http://placehold.it/300x300/333333?text=Item",
        "cat": "Women’s Casualwear",
        "price": 167,
        "originalPrice": 167,
        "originalStock": 6,
        "stock": 5,
        "quantity": 1
      }
    }

    const expectedAction = {
      type: 'ADD_STOCK',
      payload: {
        id: product.product.id
      }
    }

    expect(actions.addStock(product)).toEqual(expectedAction);
  })
});

describe('resetStock()', () => {
  it('should return an action to reset stock', () => {
    const expectedAction = {
      type: 'RESET_STOCK'
    }

    expect(actions.resetStock()).toEqual(expectedAction);
  })
})