import DateToday from './dateToday'

export const validation = (data) => {
  const errors = []
  const today = DateToday()

  const patternCurrency = /^[A-Z]{3}$/
  if (!patternCurrency.test(data.currency)) {
    errors.push('Wprowadź poprawną walutę')
  }

  if (data.quantity < 1) {
    errors.push('Wprowadź wartość większą od 0')
  }

  const patternData = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
  if (!patternData.test(data.date)) {
    errors.push('Wprowadź datę w formacie: rrrr-mm-dd ')
  }

  if (today < data.date) {
    errors.push('Wprowadź datę przeszłą lub dzisiejszą')
  }

  if (data.price < 1) {
    errors.push('Wprowadź poprawną kwotę')
  }

  return errors
}

export default validation
