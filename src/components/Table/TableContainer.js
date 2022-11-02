import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentRates } from '../../api/api'
import { createActionDelete } from '../../actions/deleteData'
import Table from './Table'

export const TableContainer = () => {
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
    const total = (priceToday * quantity).toFixed(4)
    return `${total} zł`
  }

  const getProfitOrLoss = (quantity, price, priceToday) => {
    const total = ((quantity * priceToday) - (quantity * price)).toFixed(2)
    const percent = ((1 - ((quantity * price) / (quantity * priceToday))) * 100).toFixed(2)
    return total > 0 ? `Zysk: ${total} zł (${percent}%)` : `Strata: ${total} zł (${percent}%)`
  }

  const rows = userData.map(data => ({ ...data, priceToday: getTodaysPrice(data.currency) }))

  const onClickDelete = (id) => {
    dispatch(createActionDelete(id))
  }

  return (
    <Table
      rows={rows}
      getPresentValue={getPresentValue}
      getProfitOrLoss={getProfitOrLoss}
      onClickDelete={onClickDelete}
    />
  )
}

export default TableContainer
