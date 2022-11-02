import * as React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Tooltip from '@mui/material/Tooltip'
import { StyledTable, StyledButton } from '../../styled'

export const Table = (props) => {
  const {
    rows,
    getPresentValue,
    getProfitOrLoss,
    onClickDelete
  } = props

  return (
    <StyledTable>
      <TableHead sx={{ backgroundColor: '#1d9f73' }}>
        <TableRow>
          <TableCell>Waluta</TableCell>
          <TableCell align={'right'}>Ilość</TableCell>
          <TableCell align={'right'}>Data zakupu</TableCell>
          <TableCell align={'right'}>Cena zakupu</TableCell>
          <TableCell align={'right'}>Obecny kurs</TableCell>
          <TableCell align={'right'}>Obecna wartość</TableCell>
          <TableCell align={'right'}>Zysk/strata</TableCell>
          <TableCell align={'right'}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(({ currency, quantity, date, price, priceToday, id }) => (
          <TableRow
            key={id}
            sx={{
              '&:nth-of-type(even)': {
                backgroundColor: '#0080002b'
              }
            }}
          >
            <TableCell
              component={'th'}
              scope={'row'}
            >
              {currency}
            </TableCell>
            <TableCell align={'right'}>{quantity}</TableCell>
            <TableCell align={'right'}>{date}</TableCell>
            <TableCell align={'right'}>{price} zł</TableCell>
            <TableCell align={'right'}>{priceToday.toFixed(4)} zł</TableCell>
            <TableCell align={'right'}>{getPresentValue(priceToday, quantity)}</TableCell>
            <TableCell align={'right'}>{getProfitOrLoss(quantity, price, priceToday)}</TableCell>
            <TableCell align={'right'}><Tooltip title={'Delete this row'}><StyledButton onClick={() => onClickDelete(id)}>X</StyledButton></Tooltip></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  )
}

Table.propTypes = {
  rows: PropTypes.array,
  getPresentValue: PropTypes.func,
  getProfitOrLoss: PropTypes.func,
  onClickDelete: PropTypes.func
}

export default Table
