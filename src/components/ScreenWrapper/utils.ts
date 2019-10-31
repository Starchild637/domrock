
export const returnDay = (date: string) => {
  console.log(date)
  return date.substr(0, 2)
}

export const returnMonthName = (date: any) => {
  return date.toLocaleString('default', { month: 'long' })
}