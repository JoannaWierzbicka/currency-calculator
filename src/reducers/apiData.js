const ADD_API_DATA = 'addApiData'

const initState = {
  apiData: []
}

export const reducerApiData = (state = initState, action) => {
  switch (action.type) {
    case ADD_API_DATA:
      return {
        ...state,
        apiData: [action.payload]
      }
    default:
      return state
  }
}

export default reducerApiData
