import React from 'react'
import PropTypes from 'prop-types'

import options from '../../helpers/options'
import { StyledForm, StyledLabel, StyledInput, StyledButton, StyledFormContainer, StyledSelect } from '../../styled'
import renderErrors from '../Errors/renderErrors'

export const Form = (props) => {
  const {
    handleSubmit,
    actions,
    state,
    errors
  } = props

  return (
    <StyledFormContainer>
      {renderErrors(errors)}
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor={'currency'}>Waluta: </StyledLabel>
        <StyledSelect
          name={'currency'}
          value={state.currency}
          onChange={(e) => actions.setCurrency(e.target.value)}
        >{options.map((option) => {
          return (
            <option
              key={option}
              value={option}
            >{option}
            </option>)
        })}
        </StyledSelect>
        <StyledLabel htmlFor={'quantity'}>Ilość:</StyledLabel>
        <StyledInput
          name={'quantity'}
          value={state.quantity}
          onChange={(e) => actions.setQuantity(e.target.value)}
        />
        <StyledLabel htmlFor={'date'}>Data zakupu: </StyledLabel>
        <StyledInput
          name={'date'}
          type={'date'}
          value={state.date}
          onChange={(e) => actions.setDate(e.target.value)}
        />
        <StyledLabel htmlFor={'price'}>Cena zakupu: </StyledLabel>
        <StyledInput
          name={'price'}
          type={'number'}
          value={state.price}
          onChange={(e) => actions.setPrice(e.target.value)}
        />
        <StyledButton>Dodaj</StyledButton>
      </StyledForm>
    </StyledFormContainer>

  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  actions: PropTypes.object,
  state: PropTypes.object,
  errors: PropTypes.array
}

export default Form
