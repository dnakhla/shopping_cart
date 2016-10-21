export default function reducer(state = {
  basket: [],
  error: null
}, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const prod = action.payload.product.product;

      let index;
      state.basket.forEach((item, i) => {
        if (item.id === prod.id) {
          index = i;
        }
      })

      if (index) {
        console.log(state.basket[index].quantity)
        return {
          ...state,
          basket: [...state.basket, ...state.basket[index].quantity++ ]
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