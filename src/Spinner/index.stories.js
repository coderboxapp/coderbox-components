
import React from 'react'
import { storiesOf } from '@storybook/react'
import { toPx } from 'styled-utils'
import styled from 'styled-components'
import Spinner from '.'
import Button from 'Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #CCC;
  position: relative;
  width: ${p => toPx(p.size) || '50px'};
  height: ${p => toPx(p.size) || '50px'};
  > * {
    margin: 5px;
  }
`

storiesOf('Spinner', module)
  .add('default', () => {
    return (
      <Wrapper size={200}>
        <Spinner />
        <Button>Test Spinner</Button>
      </Wrapper>
    )
  })
  .add('custom color and text', () => {
    return (
      <Wrapper size={200}>
        <Spinner label='Please wait...' palette='white' overlay='rgba(0,0,0,0.48)' />
        <Button primary>Button</Button>
        <Button>Other Button</Button>
      </Wrapper>
    )
  })
