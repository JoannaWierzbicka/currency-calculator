const URL = 'https://api.apilayer.com/exchangerates_data'

const myHeaders = new Headers()
myHeaders.append('apikey', 'kzkqFdglTNBBnfHXtCsjAks23OXmSHnB')

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
}

export const fetchData = (currency) => {
  return fetch(`${URL}/latest?base=PLN&symbols=${currency}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}

export default fetchData
