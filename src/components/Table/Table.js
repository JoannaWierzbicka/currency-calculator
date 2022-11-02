import * as React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Tooltip from '@mui/material/Tooltip'
import { StyledTable, StyledButton, StyledPaper } from '../../styled'

import TableContainer from '@mui/material/TableContainer'

export const Table = (props) => {
  const {
    rows,
    getPresentValue,
    getProfitOrLoss,
    onClickDelete
  } = props

  return (
    <TableContainer component={StyledPaper}>
      <StyledTable>
        <TableHead sx={{ backgroundColor: '#1d9f73' }}>
          <TableRow>
            <TableCell align={'center'}>Waluta</TableCell>
            <TableCell align={'center'}>Ilość</TableCell>
            <TableCell align={'center'}>Data zakupu</TableCell>
            <TableCell align={'center'}>Cena zakupu</TableCell>
            <TableCell align={'center'}>Dzisiejszy kurs</TableCell>
            <TableCell align={'center'}>Wartość całkowita</TableCell>
            <TableCell align={'center'}>Zysk/strata</TableCell>
            <TableCell align={'center'}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ currency, quantity, date, price, priceToday, id }) => (
            <TableRow
              key={id}
              sx={{
                '&:nth-of-type(even)': {
                  backgroundColor: '#0080002b'
                },
                '&:last-child td, &:last-child th': { border: 0 }
              }}
            >
              <TableCell
                align={'center'}
                component={'th'}
                scope={'row'}
              >
                {currency}
              </TableCell>
              <TableCell align={'center'}>{quantity}</TableCell>
              <TableCell align={'center'}>{date}</TableCell>
              <TableCell align={'center'}>{price} zł</TableCell>
              <TableCell align={'center'}>{priceToday.toFixed(4)} zł</TableCell>
              <TableCell align={'center'}>{getPresentValue(priceToday, quantity)}</TableCell>
              <TableCell align={'center'}>{getProfitOrLoss(quantity, price, priceToday)}</TableCell>
              <TableCell align={'center'}><Tooltip title={'Delete this row'}><StyledButton onClick={() => onClickDelete(id)}>X</StyledButton></Tooltip></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

Table.propTypes = {
  rows: PropTypes.array,
  getPresentValue: PropTypes.func,
  getProfitOrLoss: PropTypes.func,
  onClickDelete: PropTypes.func
}

export default Table
