import types from '../types/types'

const initState = {
  apiData: []
}

export const reducerApiData = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_API_DATA:
      return {
        ...state,
        apiData: [action.payload]
      }
    default:
      return state
  }
}

export default reducerApiData
