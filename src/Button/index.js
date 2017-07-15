// @flow
import React from 'react'
import { string } from 'prop-types'
import { ButtonStyle } from './styles'
import Icon from 'Icon'

type Props = {
  palette: string,
  tone: number,
  icon?: string,
  children?: any,
}

const Button = ({ palette = 'grayscale', tone, icon, children, ...props }: Props) => {
  return (
    <ButtonStyle palette={palette} tone={tone} {...props}>
      {icon && <Icon name={icon} palette='white' />}
      {children}
    </ButtonStyle>
  )
}

Button.propTypes = {
  palette: string,
  icon: string
}

Button.defaultProps = {
  palette: 'grayscale',
  tone: 1
}

export default Button
