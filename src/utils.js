import { isNumber } from 'lodash'

export const toPx = value => {
  console.log(value)
  if (isNumber(value)) {
    return `${value}px`
  }

  return value
}

export const parseColor = (value, colors) => {
  if (!value) {
    return colors.base
  }

  switch (value) {
    case 'primary':
      return colors.primary

    case 'success':
      return colors.success

    case 'gray':
      return colors.gray

    default:
      return value
  }
}

export const ucfirst = (txt) => {
  return txt.charAt(0).toUpperCase() + txt.slice(1)
}
