export default function reducer(state={
  basket: [],
  error: null
}, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      return {...state}
    }
    case 'REMOVE_PRODUCT': {
      return {...state}
    }
  }

  return state
}