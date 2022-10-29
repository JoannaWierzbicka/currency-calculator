/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { createActionAdd } from '../actions/add'
import getExchangeRate from '../api/api'
import DateToday from '../date'

const today = DateToday()

export const Form = () => {
  const [currency, setCurrency] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const [date, setDate] = React.useState('')

  const currencyInfo = { currency, amount, date }

  const dispatch = useDispatch()

  const getInfoAboutPrice = (date, currency) => {
    getExchangeRate(date, currency)
      .then(data => console.log(data))
  }

  const handleSubmit = (e) => {
    getInfoAboutPrice(date, currency)
    e.preventDefault()
    dispatch(createActionAdd(currencyInfo))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={currency}
          placeholder={'currency'}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <input
          value={amount}
          placeholder={'quantity'}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          value={date}
          placeholder={'date'}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>OK</button>
      </form>
    </>

  )
}

export default Form
