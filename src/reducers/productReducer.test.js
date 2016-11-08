import reducer from './productReducer';
import products from '../../data/products' // imports discounts from data folder

describe('productList reducer', () => {
  it('should return the initial state', () => {

    const expected = {
      "products": products
    }

    const initialState = {};

    const newState = reducer(initialState, {
      type: 'LOAD_PRODUCTS',
      payload: products
    });

    expect(newState).toEqual(expected);
  });

  it('should load products into store', () => {
    const expected = {
      products: products
    };
    const initialState = {};
    const newState = reducer(initialState, {
      type: 'LOAD_PRODUCTS',
      payload: products
    });
    expect(newState).toEqual(expected);
  });
});