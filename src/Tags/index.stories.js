import React from 'react'
import styled from 'styled-components'
import { storiesOf, action } from '@storybook/react'
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
        <Tags tags={technologies} reverse />
        <Tags tags={technologies} isPrimary />
        <Tags tags={technologies} isPrimary reverse />
        <Tags tags={technologies} isSuccess />
      </Wrapper>
    )
  })
  .add('with close', () => {
    return (
      <Tags
        tags={technologies}
        palette='primary'
        withClose
        onClick={action('remove tag:')}
      />
    )
  })
  .add('selected', () => {
    return (
      <Tags
        tags={technologies}
        selected={selectedTechnologies}
        palette='grayscale'
        selectedPalette='danger'
        tone={2}
      />
    )
  })
