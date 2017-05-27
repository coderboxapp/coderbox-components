// @flow
import React from 'react'
import { times, map } from 'lodash'
import { Overlay, Spinner } from './styles'

const SpinnerComponent = (props: { show: boolean, size: ?number, color: ?string, label: ?string }) => {
  let divs = times(12, String)

  return (
    <Overlay show={props.show}>
      <Spinner size={props.size} color={props.color}>
        {map(divs, (div, index) => <div key={index} />)}
      </Spinner>
      <label>{props.label ? props.label : 'Loading...'}</label>
    </Overlay>
  )
}

export default SpinnerComponent
