import React from 'react'
import { useDispatch } from 'react-redux'
import { createActionAdd } from '../actions/addUserData'
import options from '../options'
import StyledForm from '../styled/StyledForm'

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
    <StyledForm onSubmit={handleSubmit}>
      <label>Waluta: </label>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >{options.map((option) => {
        return <option
          key={option}
          value={option}
               >{option}
        </option>
      })}
      </select>
      <label>Ilość:</label>
      <input
        value={quantity}
        placeholder={'quantity'}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <label>Data zakupu: </label>
      <input
        type={'date'}
        value={date}
        placeholder={'date'}
        onChange={(e) => setDate(e.target.value)}
      />
      <label>Cena zakupu: </label>
      <input
        value={price}
        placeholder={'price'}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button>Dodaj</button>
    </StyledForm>
  )
}

export default Form
