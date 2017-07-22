
import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Progress from '.'

const Wrapper = styled.div`

`

storiesOf('Progress', module)
  .add(
    'simple usage',
    () => <Progress value={35} labels={['100$', '500$']} isGrayscale />
  )
  .add(
    'different colors',
    () => (
      <Wrapper>
        <Progress value={28} labels={['0$', '100$']} isPrimary />
        <Progress value={148} min={100} max={400} labels={['100$', '400$']} isSuccess isSmall />
        <Progress value={32} isDanger isLarge />
      </Wrapper>
    )
  )
  .add(
    'with labels',
    () => (
      <Wrapper>
        <Progress value={1100} isPrimary min={1000} max={2000} low={1200} high={2000} />
      </Wrapper>
    )
  )
