const ADD_DATA = 'addData'

const initState = {
  userData: []
}

export const reducerUserData = (state = initState, action) => {
  switch (action.type) {
    case ADD_DATA:
      console.log(state.userData)
      return {
        ...state,
        userData: [...state.userData, {
          currency: action.payload.currency,
          amount: action.payload.amount,
          date: action.payload.date
        }]
      }
    default:
      return state
  }
}

export default reducerUserData
