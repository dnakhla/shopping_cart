import * as actions from './basketActions';

describe('addProduct(product)', () => {
  it('should create an action to add a product', () => {
    const product = {
      "product": {
        "id": 1,
        "name": "Almond Toe Court Shoes, Patent Black",
        "image": "http://placehold.it/300x300/333333?text=Item",
        "cat": "Women’s Footwear",
        "price": 99,
        "originalPrice": 99,
        "originalStock": 5,
        "stock": 4,
        "quantity": 1
      }
    };

    const expectedAction = {
      type: 'ADD_PRODUCT',
      payload: {
        product: {
          "product": {
            "id": 1,
            "name": "Almond Toe Court Shoes, Patent Black",
            "image": "http://placehold.it/300x300/333333?text=Item",
            "cat": "Women’s Footwear",
            "price": 99,
            "originalPrice": 99,
            "originalStock": 5,
            "stock": 4,
            "quantity": 1
          }
        }
      }
    }

    expect(actions.addProduct(product)).toEqual(expectedAction)
  })
});

describe('removeProduct(prod)', () => {
  it('should create an action to remove a product', () => {
    const prod = {
      "prod": {
        "id": 1,
        "name": "Almond Toe Court Shoes, Patent Black",
        "image": "http://placehold.it/300x300/333333?text=Item",
        "cat": "Women’s Footwear",
        "price": 99,
        "originalPrice": 99,
        "originalStock": 5,
        "stock": 4,
        "quantity": 1
      }
    };

    const expectedAction = {
      type: 'REMOVE_PRODUCT',
      payload: {
        prod: {
          "prod": {
            "id": 1,
            "name": "Almond Toe Court Shoes, Patent Black",
            "image": "http://placehold.it/300x300/333333?text=Item",
            "cat": "Women’s Footwear",
            "price": 99,
            "originalPrice": 99,
            "originalStock": 5,
            "stock": 4,
            "quantity": 1
          }
        }
      }
    };

    expect(actions.removeProduct(prod)).toEqual(expectedAction);
  })
});

describe('toggleBasket()()', () => {
  it('should create an action to remove a product', () => {
    const expectedAction = {
      type: 'TOGGLE_DRAWER'
    }

    expect(actions.toggleBasket()).toEqual(expectedAction)
  })
});