
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
  .addWithInfo('with all the colors', () => {
    return (
      <Wrapper>
        <Button isPrimary onClick={action('it works')}>Primary Button</Button>
        <Button isPrimary reverse>Primary Reverse</Button>
        <Button isSuccess>Success</Button>
        <Button isDanger>Danger</Button>
        <Button isGrayscale>Grayscale</Button>
      </Wrapper>
    )
  })
  .addWithInfo('with icon', () => {
    return (
      <Wrapper>
        <Button icon='people'>Star Button</Button>
        <Button isPrimary icon='date_range'>Star Button</Button>
        <Button isSuccess reverse icon='favorite'>Favorite Button</Button>
      </Wrapper>
    )
  })
