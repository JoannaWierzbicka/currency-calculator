export const DateToday = () => {
  const dateToday = new Date()
  const year = dateToday.getFullYear()
  const monthA = dateToday.getMonth()
  const monthFixed = monthA + 1
  const month = monthFixed > 9 ? monthFixed : `0${monthFixed}`
  const dayToday = dateToday.getDate()
  const day = dayToday < 10 ? `0${dayToday}` : dayToday
  const fullDate = `${year}-${month}-${day}`

  return fullDate
}

export default DateToday
