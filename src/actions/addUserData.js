const ADD_DATA = 'addData'

export const createActionAdd = (userData) => ({
  type: ADD_DATA,
  payload: userData

})

export default createActionAdd
