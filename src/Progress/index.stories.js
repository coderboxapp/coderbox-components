
import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Progress from '.'

const Wrapper = styled.div`
  > * {
    margin: 15px 0;
  }
`

storiesOf('Progress', module)
  .addWithInfo(
    'simple usage',
    () => <Progress value={35} />
  )
  .addWithInfo(
    'different colors',
    () => (
      <Wrapper>
        <Progress value={28} isPrimary />
        <Progress value={48} isSuccess isSmall />
        <Progress value={32} isDanger isLarge />
      </Wrapper>
    )
  )
