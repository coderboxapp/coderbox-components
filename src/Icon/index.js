// @flow
import React from 'react'
import { IconStyle } from './styles'

type Props = {
  name: string,
  palette?: string
}

const Icon = ({ name, ...props }: Props) => {
  return (
    <IconStyle className='material-icons' {...props}>
      {name}
    </IconStyle>
  )
}

export default Icon
