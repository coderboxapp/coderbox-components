import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Logo from '.'

const Wrapper = styled.div`
  > * {
    margin-right: 5px;
  }
`

storiesOf('Logo', module)
  .add('with different color', () => {
    return (
      <Wrapper>
        <Logo />
        <Logo palette='primary' />
        <Logo palette='success' />
        <Logo color='#FF0000' href='www.google.com' />
      </Wrapper>
    )
  })
