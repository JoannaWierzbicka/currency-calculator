/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { createActionAdd } from '../actions/add'

export const Form = () => {
  const [currency, setCurrency] = React.useState('')
  const [quantity, setQuantity] = React.useState(0)
  const [date, setDate] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const currencyInfo = { currency, quantity, date, price }

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
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
          value={quantity}
          placeholder={'quantity'}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          value={date}
          placeholder={'date'}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          value={price}
          placeholder={'price'}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>OK</button>
      </form>
    </>

  )
}

export default Form
