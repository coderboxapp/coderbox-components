// @flow
import React from 'react'
import { ButtonStyle } from './style'
import Icon from 'Icon'

type Props = {
  palette: string,
  icon?: string,
  children?: any,
}

const Button = ({ palette = 'grayscale', icon, children, ...props }: Props) => {
  return (
    <ButtonStyle palette={palette} {...props}>
      {icon && <Icon name={icon} palette='white' />}
      {children}
    </ButtonStyle>
  )
}

export default Button
