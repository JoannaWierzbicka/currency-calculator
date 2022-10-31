import React from 'react'
import Form from './components/Form'
import BasicTable from './components/BasicTable'
import StyledDiv from './styled/StyledDiv'

export const App = () => {
  return (
    <StyledDiv>
      <Form/>
      <BasicTable/>
    </StyledDiv>
  )
}

export default App
