// @flow
import React from 'react'
import { ProgressElement } from './styles'

type Props = {
  value: number,
  max?: number
}

const Progress = ({ value, max, ...props }: Props) => {
  return (
    <ProgressElement value={value} max={max} {...props}>
      {value}
    </ProgressElement>
  )
}

Progress.defaultProps = {
  value: 0,
  max: 100,
  tone: 1
}

export default Progress
