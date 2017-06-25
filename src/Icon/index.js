// @flow
import React from 'react'
import { IconStyle } from './styles'

type Props = {
  name: string,
  palette?: string
}

const Icon = ({ name, palette = 'grayscale', ...props }: Props) => {
  return (
    <IconStyle className='material-icons' palette={palette} {...props}>
      {name}
    </IconStyle>
  )
}

export default Icon
