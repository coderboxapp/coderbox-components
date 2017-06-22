// @flow
import React from 'react'
import { times, map } from 'lodash'
import { Overlay, Spinner, SpinnerLabel, SpinnerContainer } from './styles'

type Props = {
  hide?: boolean,
  hideLabel?: boolean,
  hideOverlay?: boolean,
  align: string,
  size?: number,
  color?: string,
  label?: string,
}

const SpinnerComponent = ({ hide, hideLabel, align, hideOverlay, size, color, label }: Props) => {
  let divs = times(12, String)

  return (
    <SpinnerContainer className='Spinner' hide={hide} hideOverlay={hideOverlay} align={align}>
      <Spinner size={size} color={color} hideLabel={hideLabel}>
        {map(divs, (div, index) => <div key={index} />)}
      </Spinner>
      {!hideLabel && <SpinnerLabel>{label || 'Loading...'}</SpinnerLabel>}
    </SpinnerContainer>
  )
}

SpinnerComponent.defaultProps = {
  align: 'center',
  hideLabel: false,
  hideOverlay: false
}

export default SpinnerComponent
