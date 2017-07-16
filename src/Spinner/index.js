// @flow
import React from 'react'
import { times, map } from 'lodash'
import { extractProps } from 'styled-utils'
import { Spinner, SpinnerLabel, SpinnerContainer } from './styles'

import type { Colors } from 'coderbox-components'

type Props = Colors & {
  hide?: boolean,
  hideLabel?: boolean,
  hideOverlay?: boolean,
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
  palette = 'white',
  overlay = 'rgba(255, 255, 255, 0.4)',
  size,
  color,
  label,
  ...props
}: Props) => {
  let divs = times(12, String)
  let colors = extractProps(props)

  return (
    <SpinnerContainer
      className='Spinner'
      hide={hide}
      hideOverlay={hideOverlay}
      overlay={overlay}
      align={align}
      {...props}
    >
      <Spinner palette={palette} size={size} color={color} hideLabel={hideLabel} {...colors}>
        {map(divs, (div, index) => <div key={index} />)}
      </Spinner>
      {!hideLabel && <SpinnerLabel palette={palette} {...colors}>{label || 'Loading...'}</SpinnerLabel>}
    </SpinnerContainer>
  )
}

export default SpinnerComponent
