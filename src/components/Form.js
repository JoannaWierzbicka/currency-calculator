/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import createActionAdd from '../actions/add'
import Table from './Table'
import fetchData from '../api/api'

export const Form = () => {
  const [currency, setCurrency] = React.useState('')
  const [quantity, setQuantity] = React.useState(0)
  const [date, setDate] = React.useState('')

  const currencyInfo = { currency, quantity, date }

  const dispatch = useDispatch()
  const data = useSelector(state => state.data)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createActionAdd(currencyInfo))
  }

  //   fetchData('EUR')

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
        <button>OK</button>
      </form>
      <Table data={data}/>
    </>

  )
}

export default Form
