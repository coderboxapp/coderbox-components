// @flow
import React from 'react'
import { Flex } from './styles'

const FlexComponent = (
  props: {
    column: boolean,
    justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-between',
    alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch',
    children: any,
  }) => {
  return (
    <Flex {...props}>
      {props.children}
    </Flex>
  )
}

export default FlexComponent
