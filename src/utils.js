import { isNumber } from 'lodash'

export const toPx = value => {
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
