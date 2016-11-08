import reducer from './basketReducer';
import discounts from '../../data/discounts' // imports discounts from data folder

describe('basket reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      basket: [],
      open: false,
      total: 0,
      discountedTotal: 0,
      discountApplied: false,
      appliedDiscount: 0
    })
  });

  it('should load discounts into store', () => {
    const expected = {
      "basket": [],
      "open": false,
      "total": 0,
      "discountedTotal": 0,
      "discountApplied": false,
      "appliedDiscount": 0,
      "discounts": [
        {
          "code": "5off",
          "value": 5,
          "message": "£5 off applied",
          "conditions": {
            "category": [],
            "total": 0
          }
        },
        {
          "code": "over50",
          "value": 10,
          "message": "£10 off applied",
          "conditions": {
            "category": [],
            "total": 50
          }
        },
        {
          "code": "over75footwear",
          "value": 15,
          "message": "£15 off applied",
          "conditions": {
            "category": [
              "Men’s Casualwear"
            ],
            "total": 75
          }
        }
      ]
    }

    const initialState = {
      basket: [],
      open: false,
      total: 0,
      discountedTotal: 0,
      discountApplied: false,
      appliedDiscount: 0
    };

    const newState = reducer(initialState, {
      type: 'LOAD_DISCOUNTS',
      payload: discounts
    });

    expect(newState).toEqual(expected);
  });

  it('should add product to array in basket', () => {
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
    };
    const expected = {
      "basket": [
        {
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
      ],
      "open": false,
      "total": 0,
      "discountedTotal": 0,
      "discountApplied": false,
      "appliedDiscount": 0
    }

    const initialState = {
      basket: [],
      open: false,
      total: 0,
      discountedTotal: 0,
      discountApplied: false,
      appliedDiscount: 0
    };

    const newState = reducer(initialState, {
      type: 'ADD_PRODUCT',
      payload: {
        product: product
      }
    });

    expect(newState).toEqual(expected);
  });

  it('should open basket', () => {
    const expected = {
      "basket": [],
      "open": true,
      "total": 0,
      "discountedTotal": 0,
      "discountApplied": false,
      "appliedDiscount" : 0
    }

    const initialState = {
      basket: [],
      open: false,
      total: 0,
      discountedTotal: 0,
      discountApplied: false,
      appliedDiscount: 0
    };

    const newState = reducer(initialState, {
      type: 'TOGGLE_DRAWER'
    });

    expect(newState).toEqual(expected);
  });

  it('should add product to basket', () => {
    const product = {
      product: {
        "id": 1,
        "name": "Almond Toe Court Shoes, Patent Black",
        "image": "https://unsplash.it/200/300?image=1",
        "cat": "Women’s Footwear",
        "price": 99,
        "originalPrice": 99,
        "originalStock": 5,
        "stock": 4,
        "quantity": 1
      }
    }

    const expected = {
      "basket": [
        {
          "id": 1,
          "name": "Almond Toe Court Shoes, Patent Black",
          "image": "https://unsplash.it/200/300?image=1",
          "cat": "Women’s Footwear",
          "price": 99,
          "originalPrice": 99,
          "originalStock": 5,
          "stock": 4,
          "quantity": 1
        }
      ],
      "open": false,
      "total": 0,
      "discountedTotal": 0,
      "discountApplied": false,
      "appliedDiscount": 0
    }

    const initialState = {
      basket: [],
      open: false,
      total: 0,
      discountedTotal: 0,
      discountApplied: false,
      appliedDiscount: 0
    };

    const newState = reducer(initialState, {
      type: 'ADD_PRODUCT',
      payload: {
        product: product
      }
    });

    expect(newState).toEqual(expected);
  });

  it('should clear basket', () => {

    const expected = {
      basket: [],
      open: false,
      total: 0,
      discountedTotal: 0,
      discountApplied: false,
      appliedDiscount: 0
    }

    const initialState = {
      basket: [{
        "id": 1,
        "name": "Almond Toe Court Shoes, Patent Black",
        "image": "https://unsplash.it/200/300?image=1",
        "cat": "Women’s Footwear",
        "price": 99,
        "originalPrice": 99,
        "originalStock": 5,
        "stock": 4,
        "quantity": 1
      }],
      open: false,
      total: 0,
      discountedTotal: 0,
      discountApplied: false,
      appliedDiscount: 0
    };

    const newState = reducer(initialState, {
      type: 'CLEAR_BASKET'
    });

    expect(newState).toEqual(expected);
  });
});