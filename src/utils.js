import { isNumber } from 'lodash'

export const toPx = value => {
  if (isNumber(value)) {
    return `${value}px`
  }

  return value
}

export const parseColor = (value, theme) => {
  if (!value) {
    return theme.colors.base
  }

  switch (value) {
    case 'primary':
      return theme.colors.primary

    case 'success':
      return theme.colors.success

    default:
      return value
  }
}