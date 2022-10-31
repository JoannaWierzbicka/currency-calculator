/* eslint-disable no-unused-vars */
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { getCurrentRates, getRatesByDate } from '../api/api'
import { changeData } from '../actions/changeData'
import Tooltip from '@mui/material/Tooltip'

export const BasicTable = () => {
  const { userData } = useSelector(state => state.userData)
  const { apiData } = useSelector(state => state.apiData)
  const dispatch = useDispatch()

  React.useEffect(() => {
    return apiData.length === 0 ? dispatch(getCurrentRates()) : null
  }, [])

  const getTodaysPrice = (curr) => {
    return 1 / apiData[0].rates[curr]
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

  const handleChangeClick = (date, currency, id, e) => {
    getRatesByDate(date, currency).then(data => {
      const rate = (1 / data.rates[currency]).toFixed(2)
      if (window.confirm(`Kurs ${currency} w dniu ${date} wynosił: ${rate}. Czy zmienić wartość tabeli?`)) {
        e.target.remove()
        dispatch(changeData(rate, id))
      }
    })
  }

  const getRates = (date, currency) => {
    return getRatesByDate(date, currency).then(data => {
      const rate = (1 / data.rates[currency]).toFixed(2)
    })
  }

  const price = getRates('2022-10-10', 'EUR')
  console.log(price)

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
          {rows.map(({ currency, quantity, date, price, priceToday, id }) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component={'th'}
                scope={'row'}
              >
                {currency}
              </TableCell>
              <TableCell align={'right'}>{quantity}</TableCell>
              <TableCell align={'right'}>{date}</TableCell>
              <TableCell align={'right'}>{price} zł
                {price === getRates(date, currency)
                  ? (<Tooltip title={'Sprawdź dokładną cenę z tego dnia'}><button
                      onClick={(e) => handleChangeClick(date, currency, id, e)}
                                                                          >?
                  </button>
                  </Tooltip>)
                  : null}

              </TableCell>
              <TableCell align={'right'}>{priceToday.toFixed(2)} zł</TableCell>
              <TableCell align={'right'}>{getPresentValue(priceToday, quantity)}</TableCell>
              <TableCell align={'right'}>{getProfitOrLoss(quantity, price, priceToday)}</TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default BasicTable
