
import React from 'react'
import styled from 'styled-components'
import { storiesOf, action } from '@storybook/react'
import Button from '.'
import Flex from 'Flexbox'

const Wrapper = styled(Flex)`
  > * {
    margin-right: 5px;
  }
`

storiesOf('Button', module)
  .add('default', () => {
    return <Button withBorder>Hello</Button>
  })
  .add('with different colors', () => {
    return (
      <Wrapper>
        <Button palette='primary' onClick={action('it works')}>Primary Button</Button>
        <Button palette='danger' onClick={action('it works')}>Danger Button</Button>
      </Wrapper>
    )
  })
  .add('with icon', () => {
    return (
      <Wrapper>
        <Button icon='people'>Star Button</Button>
        <Button palette='primary' icon='date_range'>Star Button</Button>
        <Button palette='success' icon='favorite'>Favorite Button</Button>
      </Wrapper>
    )
  })
