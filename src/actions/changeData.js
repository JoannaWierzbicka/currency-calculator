import types from '../types/types'

export const createActionChangeData = (rate, id) => ({
  type: types.CHANGE,
  payload: { rate: rate, id: id }
})

export default createActionChangeData
