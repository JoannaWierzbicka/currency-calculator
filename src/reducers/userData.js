const ADD_DATA = 'addData'

const initState = {
  userData: []
}

export const reducerUserData = (state = initState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        userData: [...state.userData, {
          currency: action.payload.currency,
          quantity: action.payload.quantity,
          date: action.payload.date,
          price: action.payload.price
        }]
      }
    default:
      return state
  }
}

export default reducerUserData
