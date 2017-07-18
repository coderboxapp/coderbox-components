import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Tags from '.'

const technologies = [
  { name: 'javascript' },
  { name: '.net' },
  { name: 'java' },
  { name: 'react' }
]

const selectedTechnologies = [
  { name: '.net' },
  { name: 'java' }
]

const Wrapper = styled.div`
  > * {
    margin-bottom: 4px;
  }
`

storiesOf('Tags', module)
  .add('default', () => {
    return <Tags tags={technologies} />
  })
  .add('with all colors', () => {
    return (
      <Wrapper>
        <Tags tags={technologies} />
        <Tags tags={technologies} isPrimary />
        <Tags tags={technologies} isSuccess />
        <Tags tags={technologies} isDanger />
        <Tags tags={technologies} isGrayscale />
        <Tags tags={technologies} isBlack />
      </Wrapper>
    )
  })
  .add('with close', () => {
    return (
      <Wrapper>
        <Tags tags={technologies} withClose />
        <Tags tags={technologies} isPrimary withClose />
        <Tags tags={technologies} isSuccess withClose />
        <Tags tags={technologies} isDanger withClose />
        <Tags tags={technologies} isGrayscale withClose />
        <Tags tags={technologies} isBlack withClose />
      </Wrapper>
    )
  })
  .add('outlined', () => {
    return (
      <Wrapper>
        <Tags tags={technologies} withClose isOutlined />
        <Tags tags={technologies} isPrimary withClose isOutlined />
        <Tags tags={technologies} isSuccess withClose isOutlined />
        <Tags tags={technologies} isDanger withClose isOutlined />
        <Tags tags={technologies} isGrayscale withClose isOutlined />
        <Tags tags={technologies} isBlack withClose isOutlined />
      </Wrapper>
    )
  })
  .add('selected', () => {
    return (
      <Tags
        tags={technologies}
        selected={selectedTechnologies}
      />
    )
  })
