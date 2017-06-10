// @flow
import React from 'react'
import { ButtonStyle } from '../styles'

type Props = {
  color?: string,
  textColor?: string,
  className?: string,
  primary: boolean,
  success: boolean,
  children?: any,
  onClick?: (evt: Event) => void,
}

const ButtonComponent = ({
  color = 'base',
  textColor = 'base',
  primary = false,
  success = false,
  className = '',
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
    <ButtonStyle className={className} color={color} textColor={textColor} onClick={(evt: Event) => onClick && onClick(evt)}>
      {children}
    </ButtonStyle>
  )
}

export default ButtonComponent
