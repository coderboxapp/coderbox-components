
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
        <Button palette='primary' onClick={action('it works')}>Primary Button</Button>
        <Button palette='danger' onClick={action('it works')}>Danger Button</Button>
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
