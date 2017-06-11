// @flow
import React from 'react'
import { FlexStyle } from './styles'

type Props = {
  column?: boolean,
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between',
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch',
  className?: string,
  children?: any
}

const FlexComponent = (props: Props) => {
  return (
    <FlexStyle className={props.className} {...props}>
      {props.children}
    </FlexStyle>
  )
}

FlexComponent.defaultProps = {
  className: ''
}

export default FlexComponent
