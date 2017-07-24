// @flow
import React from 'react'
import { ProgressWrapper, ProgressElement, ProgressLabels } from './styles'

type Props = {
  value: number,
  min: number,
  max: number,
}

const Progress = ({ value, min, max, labels, ...props }: Props) => {
  let optimum = min + Math.round((max - min) / 2)

  return (
    <ProgressWrapper>
      <ProgressElement value={value} min={min} max={max} low={min} high={max} optimum={optimum} {...props}>
        {value}
      </ProgressElement>
      {labels &&
        <ProgressLabels {...props}>
          <div>{labels[0]}</div>
          <div>{labels[1]}</div>
        </ProgressLabels>
      }
    </ProgressWrapper>
  )
}

Progress.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  low: 0,
  high: 100
}

export default Progress
