// @flow
import React from 'react'
import { IconStyle } from './styles'
import type { Colors } from 'coderbox-components'

type Props = Colors & {
  name: string
}

const Icon = ({ name, ...props }: Props) => {
  return (
    <IconStyle className='material-icons' {...props}>
      {name}
    </IconStyle>
  )
}

export default Icon
