
import React from 'react'
import { storiesOf, action } from '@storybook/react'
import styled from 'styled-components'
import Button from '.'
import Flex from 'Flexbox'

const Wrapper = styled(Flex)`
  > * {
    margin-right: 5px;
  }
`

storiesOf('Button', module)
  .addWithInfo(
    'simple usage',
    () => <Button withBorder>Hello</Button>
  )
  .addWithInfo('with different colors', () => {
    return (
      <Wrapper>
        <Button palette='primary' withBorder tone={0} onClick={action('it works')}>Primary Button</Button>
        <Button palette='primary' withBorder tone={3}>Primary Tone</Button>
        <Button palette='grayscale' withBorder tone={1}>Grayscale</Button>
        <Button palette='danger' withBorder>Danger Button</Button>
      </Wrapper>
    )
  })
  .addWithInfo('with icon', () => {
    return (
      <Wrapper>
        <Button icon='people'>Star Button</Button>
        <Button palette='primary' icon='date_range'>Star Button</Button>
        <Button palette='success' icon='favorite'>Favorite Button</Button>
      </Wrapper>
    )
  })
