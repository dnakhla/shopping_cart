export default function reducer(state = {
  basket: [],
  total: 0,
  discountedTotal: 0,
  discountApplied: false,
  appliedDiscount: ''
}, action) {
  switch (action.type) {
    case 'LOAD_DISCOUNTS': {
      return {
        ...state,
        discounts: action.payload
      }
    }
    case 'ADD_PRODUCT': {
      const id = action.payload.product.product.id
      const newBasket = [...state.basket]
      const itemIndex = newBasket.findIndex(product => product.id === id)

      const prod = action.payload.product.product;
      let foundItem = false;
      if (itemIndex !== -1) foundItem = true;

      if (foundItem) {
        return {
          ...state,
          basket: [...state.basket, ...state.basket[itemIndex].quantity++ ]
        }
      } else {
        prod.quantity = 1;
        return {
          ...state,
          basket: [...state.basket, prod]
        }
      }
    }
    case 'REMOVE_PRODUCT': {
      const newBasket = [...state.basket]
      const item = action.payload.prod.product;
      const id = item.id;

      const itemIndex = newBasket.findIndex(product => product.id === id)
      if (newBasket[itemIndex].quantity === 1) {
        const newArray = newBasket.filter((obj) => {
          return obj.id !== id
        })
        return {
          ...state,
          basket: newArray
        }
      } else {
        newBasket[itemIndex].quantity = newBasket[itemIndex].quantity - 1

        return {
          ...state,
          basket: newBasket
        }
      }



    }
    case 'CLEAR_BASKET': {
      console.log('clear')
      return {
        ...state,
        basket: []
      }
    }
    case 'CALC_TOTAL': {
      const basket = [...state.basket];
      let total = 0;
      basket.map((item) => {
        const value = item.price * item.quantity;
        total = total + value;
      })
      if (total === basket.total) return {...state}
      return {
        ...state,
        total: state.basket.total = parseFloat(total).toFixed(2)
      }
    }
    case 'SET_CODE': {
      return {
        ...state,
        voucherCode: action.payload.voucherCode
      }
    }
    case 'APPLY_DISCOUNT': {
      console.log('APPLY_DISCOUNT')
      const discounts = [...state.discounts]
      const voucherCode = state.voucherCode
      const appliedDiscount = state.appliedDiscount
      console.log(discounts)
      let thisDiscount;
      discounts.map((discount) => {
        if (discount.code === voucherCode) {
          thisDiscount = discount
        }
      })

      if (thisDiscount) {
        console.log(state.total)
        console.log(thisDiscount.value)
        const newDiscounted = parseFloat(state.total).toFixed(2) - thisDiscount.value
        return {
          ...state,
          appliedDiscount: true,
          discountedTotal: parseFloat(newDiscounted).toFixed(2)
        }
      }

      return {
        ...state,
        appliedDiscount: false,
        discountedTotal: state.total
      }
    }
  }

  return state
}