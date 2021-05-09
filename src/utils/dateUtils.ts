enum dayOfWeekList {
  '日',
  '月',
  '火',
  '水',
  '木',
  '金',
  '土',
}

export const getFormattedDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const dayOfWeek = dayOfWeekList[date.getDay()]

  const formattedDate = `${year}年 ${month}月 ${day}日 (${dayOfWeek})`

  return formattedDate
}

export const getTextFieldValueDate = (date: Date | null) => {
  if (!date) return ''

  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  // 必ず2桁になるように0埋め
  const padding_month = ('00' + month).slice(-2)
  const padding_day = ('00' + day).slice(-2)

  const formattedDate = `${year}-${padding_month}-${padding_day}`

  return formattedDate
}

export const isToday = (date: Date | null) => {
  if (!date) return false

  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const today = new Date()

  if (
    year === today.getFullYear() &&
    month === today.getMonth() &&
    day === today.getDate()
  ) {
    return true
  }

  return false
}
