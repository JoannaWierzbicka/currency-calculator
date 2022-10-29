const URL = 'https://api.apilayer.com/exchangerates_data'

const myHeaders = new Headers()
myHeaders.append('apikey', 'kzkqFdglTNBBnfHXtCsjAks23OXmSHnB')

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
}

export const getExchangeRate = (date, currency) => {
  return fetch(`${URL}/${date}?&symbols=${currency}&base=PLN`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error))
}

export default getExchangeRate
