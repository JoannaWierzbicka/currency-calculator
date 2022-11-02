import types from '../types/types'

export const createActionApi = (apiData) => ({
  type: types.ADD_API_DATA,
  payload: apiData
})

export default createActionApi
