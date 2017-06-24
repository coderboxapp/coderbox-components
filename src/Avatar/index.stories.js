
import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from '.'
import styled from 'styled-components'

const Wrapper = styled.div`
  > * {
    margin-right: 5px;
  }
`

storiesOf('Avatar', module)
  .add('default', () => {
    return <Avatar />
  })
  .add('using email', () => {
    return <Avatar email='ghalex@gmail.com' />
  })
  .add('using link', () => {
    return <Avatar url='https://pbs.twimg.com/profile_images/618782450890575874/CWY4_Mef.jpg' />
  })
  .add('custom size', () => {
    return (
      <Wrapper>
        <Avatar size={60} url='https://pbs.twimg.com/profile_images/618782450890575874/CWY4_Mef.jpg' />
        <Avatar size={80} url='https://pbs.twimg.com/profile_images/618782450890575874/CWY4_Mef.jpg' />
      </Wrapper>
    )
  })