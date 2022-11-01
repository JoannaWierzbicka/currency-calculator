/* eslint-disable no-unused-vars */
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { getCurrentRates, getRatesByDate } from '../api/api'
import { changeData } from '../actions/changeData'
import Tooltip from '@mui/material/Tooltip'
import StyledTable from '../styled/StyledTable'

export const BasicTable = () => {
  const { userData } = useSelector(state => state.userData)
  const { apiData } = useSelector(state => state.apiData)
  const dispatch = useDispatch()

  React.useEffect(() => {
    return apiData.length === 0 ? dispatch(getCurrentRates()) : null
  }, [])

  const getTodaysPrice = (currency) => {
    return 1 / apiData[0].rates[currency]
  }

  const getPresentValue = (priceToday, quantity) => {
    const total = (priceToday * quantity).toFixed(2)
    return `${total} zł`
  }

  const getProfitOrLoss = (quantity, price, priceToday) => {
    const total = ((quantity * priceToday) - (quantity * price)).toFixed(2)
    const percent = ((1 - ((quantity * price) / (quantity * priceToday))) * 100).toFixed(2)
    return total > 0 ? `Zysk: ${total} zł (${percent}%)` : `Strata: ${total} zł (${percent}%)`
  }

  const rows = userData.map(data => ({ ...data, priceToday: getTodaysPrice(data.currency) }))

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
            <TableCell align={'right'}>{priceToday.toFixed(2)} zł</TableCell>
            <TableCell align={'right'}>{getPresentValue(priceToday, quantity)}</TableCell>
            <TableCell align={'right'}>{getProfitOrLoss(quantity, price, priceToday)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  )
}

export default BasicTable
