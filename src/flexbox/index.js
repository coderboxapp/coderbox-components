// @flow
import React from 'react'
import { FlexStyle } from './styles'

type Props = {
  column?: boolean,
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between',
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch',
  children?: any
}

const FlexComponent = ({column, justifyContent, alignItems, children, ...props}: Props) => {
  return (
    <FlexStyle
      column={column}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...props}>
      {children}
    </FlexStyle>
  )
}

export default FlexComponent
