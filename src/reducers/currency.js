const ADD_DATA = 'addData'

const initState = {
  data: []
}

export const reducerCurr = (state = initState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: state.data.concat({
          currency: action.payload.currency,
          quantity: action.payload.quantity,
          date: action.payload.date
        })
      }
    default:
      return state
  }
}

export default reducerCurr
