import React from 'react'
import StyledDiv from '../styled/StyledDiv'
import { FormContainer } from './Form/FormContainer'
import { TableContainer } from './Table/TableContainer'

export const CurrencyCalculator = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>KALKULATOR WALUTOWY</h2>
      <StyledDiv>
        <FormContainer/>
        <TableContainer/>
      </StyledDiv>
    </>

  )
}

export default CurrencyCalculator
