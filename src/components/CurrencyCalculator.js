import React from 'react'
import StyledDiv from '../styled/StyledDiv'
import { FormContainer } from './Form/FormContainer'
import { TableContainer } from './Table/TableContainer'
import Title from './Title/Title'

export const CurrencyCalculator = () => {
  return (
    <>
      <Title/>
      <StyledDiv>
        <FormContainer/>
        <TableContainer/>
      </StyledDiv>
    </>

  )
}

export default CurrencyCalculator
