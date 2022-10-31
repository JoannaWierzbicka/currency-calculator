const ADD_API_DATA = 'addApiData'

export const createActionApi = (apiData) => ({
  type: ADD_API_DATA,
  payload: apiData
})

export default createActionApi
