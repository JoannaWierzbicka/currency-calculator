/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const createData = (currency, amount, date, price, currencyToday, totalValue, profitOrLoss) => {
  return { currency, amount, date, price, currencyToday, totalValue, profitOrLoss }
}

export const BasicTable = () => {
  const { userData } = useSelector(state => state.userData)
  const { apiData } = useSelector(state => state.apiData)
  const dispatch = useDispatch()
  console.log('user:', userData)
  console.log('api:', apiData)

  const rows = userData.map(data => {
    return createData(data.currency, data.amount, data.date)
  })

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label={'simple table'}
      >
        <TableHead>
          <TableRow>
            <TableCell>Waluta</TableCell>
            <TableCell align={'right'}>Ilość</TableCell>
            <TableCell align={'right'}>Data zakupu</TableCell>
            <TableCell align={'right'}>Cena zakupu</TableCell>
            <TableCell align={'right'}>Obecny kurs</TableCell>
            <TableCell align={'right'}>Obecna wartość</TableCell>
            <TableCell align={'right'}>Zysk/strata</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={uuid()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component={'th'}
                scope={'row'}
              >
                {row.currency}
              </TableCell>
              <TableCell align={'right'}>{row.amount}</TableCell>
              <TableCell align={'right'}>{row.date}</TableCell>
              <TableCell align={'right'}>{row.price}</TableCell>
              <TableCell align={'right'}>{row.totalValue}</TableCell>
              <TableCell align={'right'}>{row.profitOrLoss}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default BasicTable
