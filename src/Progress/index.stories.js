
import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Progress from '.'

const Wrapper = styled.div`

`

storiesOf('Progress', module)
  .add(
    'simple usage',
    () => <Progress value={35} isGrayscale />
  )
  .add(
    'different colors',
    () => (
      <Wrapper>
        <Progress value={28} isPrimary />
        <Progress value={48} isSuccess isSmall />
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
