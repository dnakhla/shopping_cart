export default function reducer(state={
  products: []
}, action) {
  switch (action.type) {
    case 'LOAD_PRODUCTS': {
      return {
        ...state,
        products: action.payload
      }
    }
    case 'REDUCE_STOCK': {
      const id = action.payload.id;
      const newList = [...state.products]
      const itemIndex = newList.findIndex(product => product.id === id)

      return {
        ...state,
        products: [...state.products, ...state.products[itemIndex].stock = state.products[itemIndex].stock - 1]
      }

    }
    case 'ADD_STOCK': {
      const id = action.payload.id;
      const newList = [...state.products]
      const itemIndex = newList.findIndex(product => product.id === id)

      return {
        ...state,
        products: [...state.products, ...state.products[itemIndex].stock = state.products[itemIndex].stock + 1]
      }

    }
  }
  return state;
}