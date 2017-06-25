import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import ListItem from '.'

const Wrapper = styled.div`
  border: 1px solid #CCC;
  padding: 10px;
`

const position = {
  id: 0,
  title: 'Web Developer',
  company: {
    id: 0,
    name: 'Coderbox',
    logo: 'https://s3-eu-west-1.amazonaws.com/coderbox/logos/coderbox-blue.png'
  },
  dateRange: {
    start: new Date(2015, 5, 4),
    end: new Date(2016, 5, 4)
  },
  technologies: [{ name: 'javascript' }, { name: 'css' }],
  description: 'My job at **Coderbox** Software Inc. is divided into two roles.First, I act as Full-stack Developer and my responsibility is to implement the necessary features.'
}

storiesOf('ListItem', module).add('default', () => {
  return (
    <Wrapper>
      <ListItem
        item={position} />
    </Wrapper>
  )
})
