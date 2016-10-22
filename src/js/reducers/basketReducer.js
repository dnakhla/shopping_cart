export default function reducer(state = {
  basket: [],
  error: null
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
      console.log('state.basket')
      console.log(state.basket)
      const selected = action.payload.prod.product.id;
      console.log(selected)
      let index = 0
      state.basket.forEach((item, i) => {
        console.log(item.id)
        if (item.id === selected) {
          index = i;
        }
      });
      return {
        ...state,
        basket: [...state.basket.slice(index, index)]
      }
    }
  }

  return state
}