// @flow
import React from 'react'
import { ButtonStyle } from './styles'
import Icon from 'Icon'

type Props = {
  palette: string,
  primary?: boolean,
  icon?: string,
  children?: any,
}

const Button = ({ palette = 'grayscale', primary, icon, children, ...props }: Props) => {
  if (primary) {
    palette = 'primary'
  }

  return (
    <ButtonStyle palette={palette} {...props}>
      {icon && <Icon name={icon} palette='white' />}
      {children}
    </ButtonStyle>
  )
}

export default Button
