import { v4 as uuid } from 'uuid'

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
          price: action.payload.price,
          id: uuid()
        }]
      }
    case 'change':
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
    default:
      return state
  }
}

export default reducerUserData
