
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Icon from '.'

const Wrapper = styled.div`
  > * {
    margin-right: 5px;
  }
`

storiesOf('Icon', module)
  .add('default', () => {
    return (
      <Wrapper>
        <Icon name='star' />
        <Icon name='extension' isPrimary />
        <Icon name='work' isDanger />
      </Wrapper>
    )
  })
  .add('with custom size', () => (
    <Wrapper>
      <Icon name='redeem' size={48} />
      <Icon name='bug_report' isDanger size={50} />
    </Wrapper>
  ))
