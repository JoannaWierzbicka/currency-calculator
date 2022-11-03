import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export const StyledPaper = styled(Paper)`
  background-color: #87c2ae;
  margin: 20px;
  height: fit-content;
  max-width: 65%;
  border-radius: 5px;
  @media only screen and (max-width: 600px){
    margin: 0 auto;
}
`

export default StyledPaper
