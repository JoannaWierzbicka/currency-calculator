import React from 'react'
import { useDispatch } from 'react-redux'
import { createActionAdd } from '../actions/addUserData'
import options from '../options'
import StyledForm from '../styled/StyledForm'
import StyledLabel from '../styled/StyledLabel'
import StyledInput from '../styled/StyledInput'
import { getRatesByDate } from '../api/api'
import { changeData } from '../actions/changeData'
import { v4 as uuid } from 'uuid'

export const Form = () => {
  const [currency, setCurrency] = React.useState('')
  const [quantity, setQuantity] = React.useState(0)
  const [date, setDate] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const [id, setId] = React.useState(uuid())
  const currencyInfo = { currency, quantity, date, price, id }

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setId(uuid())
    dispatch(createActionAdd(currencyInfo))
  }

  const handleClick = () => {
    getRatesByDate(date, currency).then(data => {
      const rate = (1 / data.rates[currency]).toFixed(2)
      if (rate !== price) {
        if (window.confirm(`Kurs ${currency} w dniu ${date} wynosił: ${rate}. Czy wpisać poprawną wartość do tabeli?`)) {
          dispatch(changeData(rate, id))
        }
      }
    })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor={'currency'}>Waluta: </StyledLabel>
      <select
        name={'currency'}
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
      <StyledLabel htmlFor={'quantity'}>Ilość:</StyledLabel>
      <StyledInput
        name={'quantity'}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <StyledLabel htmlFor={'date'}>Data zakupu: </StyledLabel>
      <StyledInput
        name={'date'}
        type={'date'}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <StyledLabel htmlFor={'price'}>Cena zakupu: </StyledLabel>
      <StyledInput
        name={'price'}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleClick}>Dodaj</button>
    </StyledForm>
  )
}

export default Form
