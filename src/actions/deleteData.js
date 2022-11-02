import types from '../types/types'

export const createActionDelete = (id) => ({
  type: types.DELETE_DATA,
  payload: id
})

export default createActionDelete
