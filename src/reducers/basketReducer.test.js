import reducer from '../reducers/basketReducer';
import { addProduct } from '../actions/basketActions';


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

    expect(
      reducer(undefined, {
          type: addProduct,
          product: product
        }
        ).toEqual(expected))
  });
});