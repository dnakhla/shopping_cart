export default function reducer(state = {
  basket: [],
  error: null
}, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      return {
        ...state,
        basket: [...state.basket, action.payload.product.product]
      }
    }
    case 'REMOVE_PRODUCT': {
      return {...state}
    }
  }

  return state
}