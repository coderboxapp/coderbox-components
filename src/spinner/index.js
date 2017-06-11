// @flow
import React from 'react'
import { times, map } from 'lodash'
import { Overlay, Spinner, SpinnerLabel, SpinnerContainer } from './styles'

type Props = {
  hide?: boolean,
  hideLabel?: boolean,
  hideOverlay?: boolean,
  size?: number,
  color?: string,
  label?: string,
}

const SpinnerComponent = (props: Props) => {
  let divs = times(12, String)

  return (
    <SpinnerContainer hide={props.hide}>
      <Overlay hideOverlay={props.hideOverlay} />
      <Spinner size={props.size} color={props.color} hideLabel={props.hideLabel}>
        {map(divs, (div, index) => <div key={index} />)}
      </Spinner>
      {!props.hideLabel &&
        <SpinnerLabel>{props.label ? props.label : 'Loading...'}</SpinnerLabel>}
    </SpinnerContainer>
  )
}

SpinnerComponent.defaultProps = {
  hideLabel: false,
  hideOverlay: false
}

export default SpinnerComponent
