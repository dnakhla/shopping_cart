export default function reducer(state = {
  basket: [],
  total: 0,
  discountedTotal: 0
}, action) {
  switch (action.type) {
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
  }

  return state
}