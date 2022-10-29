export const DateToday = () => {
  const dateToday = new Date()
  const year = dateToday.getFullYear()
  const monthA = dateToday.getMonth()
  const monthFixed = monthA + 1
  const month = monthFixed > 9 ? monthFixed : `0${monthFixed}`
  const day = dateToday.getDate()
  const fullDate = `${year}-${month}-${day}`

  return fullDate
}

export default DateToday
