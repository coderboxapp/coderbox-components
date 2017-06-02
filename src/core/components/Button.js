// @flow
import React from 'react'
import { ButtonStyle } from '../styles'

type Props = {
  color?: string,
  textColor?: string,
  primary: boolean,
  success: boolean,
  onClick?: Function,
  children?: any,
}

const ButtonComponent = ({
  color = 'base',
  textColor = 'base',
  primary = false,
  success = false,
  onClick,
  children
}: Props) => {
  if (primary) {
    color = textColor = 'primary'
  }

  if (success) {
    color = textColor = 'success'
  }

  return (
    <ButtonStyle color={color} textColor={textColor} onClick={e => onClick && onClick(e)}>
      {children}
    </ButtonStyle>
  )
}

export default ButtonComponent
