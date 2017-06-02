// @flow
import React from 'react'
import { ButtonStyle } from '../styles'

type Props = {
  color?: 'base' | 'primary' | 'success',
  onClick?: Function,
  children?: any
}

const ButtonComponent = ({ color = 'base', onClick, children }: Props) => {
  return (
    <ButtonStyle color={color} onClick={(e) => onClick && onClick(e)}>
      {children}
    </ButtonStyle>
  )
}

export default ButtonComponent
