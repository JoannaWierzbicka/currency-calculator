import { createActionApi } from '../actions/addApiData'

const URL = 'https://api.apilayer.com/exchangerates_data'

const myHeaders = new Headers()
myHeaders.append('apikey', 'W1wWwkLEZ2CB7okZK9ETcWWAE5oFW0Sm')

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
}

const getCurrentRates = () => (dispatch) => {
  return fetch(`${URL}/latest?&symbols&base=PLN`, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json()
      } throw Error('Error')
    })
    .then(response => dispatch(createActionApi(response)))
}

const getRatesByDate = (date, currency) => {
  return fetch(`${URL}/${date}?&symbols=${currency}&base=PLN`, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json()
      } throw Error('Error')
    })
}

export { getCurrentRates, getRatesByDate }
