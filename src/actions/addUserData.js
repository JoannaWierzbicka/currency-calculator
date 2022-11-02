import types from '../types/types'

export const createActionAddData = (userData) => ({
  type: types.ADD_DATA,
  payload: userData

})

export default createActionAddData
