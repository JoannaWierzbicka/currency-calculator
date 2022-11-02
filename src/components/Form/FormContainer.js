import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { getRatesByDate } from '../../api/api'

import { createActionAddData } from '../../actions/addUserData'
import { createActionChangeData } from '../../actions/changeData'

import validation from '../../helpers/validation'

import Form from './Form'

export const FormContainer = () => {
  const [currency, setCurrency] = React.useState('')
  const [quantity, setQuantity] = React.useState(0)
  const [date, setDate] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const [id, setId] = React.useState(uuid())
  const [errors, setErrors] = React.useState([])
  const currencyInfo = { currency, quantity, date, price, id }

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setId(uuid())
    const countErrors = validation(currencyInfo)
    if (countErrors.length === 0) {
      dispatch(createActionAddData(currencyInfo))
      checkRate()
    } setErrors(countErrors)
  }

  const checkRate = () => {
    getRatesByDate(date, currency).then(data => {
      const rate = (1 / data.rates[currency]).toFixed(4)
      if (rate !== price) {
        if (window.confirm(`Kurs ${currency} w dniu ${date} wynosił: ${rate}. Czy wpisać poprawną wartość do tabeli?`)) {
          dispatch(createActionChangeData(rate, id))
        }
      }
    })
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      actions={{
        setCurrency,
        setQuantity,
        setDate,
        setPrice
      }}
      state={{
        currency,
        quantity,
        date,
        price
      }}
      errors={errors}
    />
  )
}

export default FormContainer
