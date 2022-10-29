const ADD_DATA = 'addData'
const ADD_API_DATA = 'addApiData'

const createActionAdd = (userData) => ({
  type: ADD_DATA,
  payload: userData

})

const createActionApi = (apiData) => ({
  type: ADD_API_DATA,
  payload: apiData
})

export { createActionAdd, createActionApi }
