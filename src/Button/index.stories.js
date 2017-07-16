import React from 'react'
import { storiesOf, action } from '@storybook/react'
import styled from 'styled-components'
import Button from '.'

const Wrapper = styled.div`
  & a {
    margin: 5px;
  }
`

storiesOf('Button', module)
  .addWithInfo('with all the colors', () => {
    return (
      <Wrapper>
        <div>
          <Button>Normal</Button>
          <Button isPrimary onClick={action('it works')}>Primary</Button>
          <Button isSuccess>Success</Button>
          <Button isDanger>Danger</Button>
          <Button isGrayscale>Grayscale</Button>
        </div>
        <div>
          <Button reverse>Normal</Button>
          <Button isPrimary reverse>Primary</Button>
          <Button isSuccess reverse>Success</Button>
          <Button isDanger reverse>Danger</Button>
          <Button isGrayscale reverse>Grayscale</Button>
        </div>
        <div>
          <Button>Normal</Button>
          <Button isPrimary isOutlined>Primary</Button>
          <Button isSuccess isOutlined>Success</Button>
          <Button isDanger isOutlined>Danger</Button>
          <Button isGrayscale isOutlined>Grayscale</Button>
        </div>
      </Wrapper>
    )
  })
  .addWithInfo('with icon', () => {
    return (
      <Wrapper>
        <Button icon='people'>Star Button</Button>
        <Button isPrimary icon='date_range'>Star Button</Button>
        <Button isSuccess isOutlined icon='favorite'>Favorite Button</Button>
      </Wrapper>
    )
  })
