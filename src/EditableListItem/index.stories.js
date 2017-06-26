
import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import EditableListItem from '.'
import Autocomplete from 'Autocomplete'

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
  description: 'My job at **Coderbox** Software Inc. is divided into two roles. \n\nFirst, I act as Full-stack Developer and my responsibility is to implement the necessary features.'
}

const transformPosition = p => {
  let item = {}

  item.id = p._id
  item.title = p.title
  item.subtitle = p.company.name
  item.image = p.company.logo
  item.description = p.description || ''
  item.tags = p.technologies
  item.dateRange = p.dateRange

  return item
}

const formSettings = {
  subtitle: {
    name: 'company',
    label: 'Company',
    component: Autocomplete,
    componentProps: {
      placeholder: 'Type company name',
      suggestions: []
    }
  },
  tags: {
    name: 'technologies'
  }
}

storiesOf('EditableListItem', module)
  .add('simple usage', () => {
    return (
      <Wrapper>
        <EditableListItem
          item={position}
          formSettings={formSettings}
          transform={transformPosition} />
      </Wrapper>
    )
  })
