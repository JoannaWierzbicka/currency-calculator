import types from '../types/types'

export const changeData = (rate, id) => ({
  type: types.CHANGE,
  payload: { rate: rate, id: id }
})

export default changeData
