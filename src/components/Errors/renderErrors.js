import React from 'react'
import { StyledErrors } from '../../styled'

export const renderErrors = (props) => {
  return (
    <StyledErrors>{props && props.length !== 0
      ? props.map(error => {
        return <li key={error}>{error}</li>
      })
      : null}
    </StyledErrors>
  )
}
export default renderErrors
