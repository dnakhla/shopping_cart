export default function reducer(state = {
  load: [],
  error: null
}, action) {
  switch (action.type) {
    case 'LOAD_PRODUCTS': {
      console.log(action.payload.products)
      return {
        ...state,
        load: action.payload.products
      }
    }
    default:
      return state
  }

}