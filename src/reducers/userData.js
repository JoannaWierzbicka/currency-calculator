import types from '../types/types'

const initState = {
  userData: []
}

export const reducerUserData = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        userData: [...state.userData, {
          currency: action.payload.currency,
          quantity: action.payload.quantity,
          date: action.payload.date,
          price: action.payload.price,
          id: action.payload.id
        }]
      }
    case types.CHANGE:
      return {
        ...state,
        userData: state.userData.map((data) => {
          if (action.payload.id === data.id) {
            if (data.price === action.payload) return data
            return {
              ...data,
              price: action.payload.rate
            }
          } return data
        })
      }
    case types.DELETE_DATA:
      return {
        ...state,
        userData: state.userData.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}

export default reducerUserData
