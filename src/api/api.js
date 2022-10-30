import { createActionApi } from '../actions/add'

const URL = 'https://api.apilayer.com/exchangerates_data'

const myHeaders = new Headers()
myHeaders.append('apikey', 'kzkqFdglTNBBnfHXtCsjAks23OXmSHnB')

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
}

export const getCurrentRates = () => (dispatch) => {
  return fetch(`${URL}/latest?&symbols&base=PLN`, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json()
      } throw Error('Error')
    })
    .then(response => dispatch(createActionApi(response)))
}

export default getCurrentRates
