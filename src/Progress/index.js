// @flow
import React from 'react'
import { ProgressElement } from './styles'

type Props = {
  value: number,
  min: number,
  max: number,
  low?: number,
  high?: number
}

const Progress = ({ value, min, max, low, high, ...props }: Props) => {
  let optimum = min + Math.round((max - min) / 2)

  return (
    <ProgressElement value={value} min={min} max={max} low={low} high={high} optimum={optimum} {...props}>
      {value}
    </ProgressElement>
  )
}

Progress.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  low: 20,
  high: 100
}

export default Progress
