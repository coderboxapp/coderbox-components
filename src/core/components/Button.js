// @flow
import React from 'react'
import { Button } from '../styles'

type Props = {
  color: 'base' | 'primary' | 'success',
  onClick: Function,
  children: []
}

const ButtonComponent = ({ color = 'base', onClick, children }: Props) => {
  return (
    <Button color={color} onClick={onClick}>
      {children}
    </Button>
  )
}

export default ButtonComponent
