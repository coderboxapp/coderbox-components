import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { position, transformPosition } from 'mockup'

import ListItem from '.'

const Wrapper = styled.div`
  border: 1px solid #CCC;
  padding: 10px;
`

storiesOf('ListItem', module).add('default', () => {
  return (
    <Wrapper>
      <ListItem
        item={position}
        transform={transformPosition} />
    </Wrapper>
  )
})
