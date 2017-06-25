// @flow
import React from 'react'
import { times, map } from 'lodash'
import { Spinner, SpinnerLabel, SpinnerContainer } from './styles'

type Props = {
  hide?: boolean,
  hideLabel?: boolean,
  hideOverlay?: boolean,
  palette?: string,
  align?: string,
  overlay?: string,
  size?: number,
  color?: string,
  label?: string,
}

const SpinnerComponent = ({
  hide,
  hideLabel,
  hideOverlay,
  align = 'center',
  palette = 'primary',
  overlay = 'rgba(255, 255, 255, 0.4)',
  size,
  color,
  label,
  ...props
}: Props) => {
  let divs = times(12, String)

  return (
    <SpinnerContainer
      className='Spinner'
      hide={hide}
      hideOverlay={hideOverlay}
      overlay={overlay}
      align={align}
      {...props}
    >
      <Spinner palette={palette} size={size} color={color} hideLabel={hideLabel}>
        {map(divs, (div, index) => <div key={index} />)}
      </Spinner>
      {!hideLabel && <SpinnerLabel palette={palette}>{label || 'Loading...'}</SpinnerLabel>}
    </SpinnerContainer>
  )
}

export default SpinnerComponent
