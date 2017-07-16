
import React from 'react'
import { storiesOf } from '@storybook/react'
import { toPx } from 'styled-utils'
import styled from 'styled-components'
import Spinner from '.'
import Button from 'Button'

const Wrapper = styled.div`
  display: inline-block;
  border: 1px solid #CCC;
  position: relative;
  width: ${p => toPx(p.size) || '50px'};
  height: ${p => toPx(p.size) || '50px'};
  > * {
    margin: 5px;
  }
`

storiesOf('Spinner', module)
  .add('with all colors', () => {
    return (
      <div>
        <Wrapper size={100}><Spinner isBlack /></Wrapper>
        <Wrapper size={100}><Spinner isPrimary /></Wrapper>
        <Wrapper size={100}><Spinner isPrimary reverse /></Wrapper>
        <Wrapper size={100}><Spinner isSuccess /></Wrapper>
        <Wrapper size={100}><Spinner isDanger /></Wrapper>
      </div>
    )
  })
