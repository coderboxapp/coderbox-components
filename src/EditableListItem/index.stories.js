
import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import EditableListItem from '.'
import Autocomplete from 'Autocomplete'
import { position, transformPosition } from 'mockup'

const Wrapper = styled.div`
  border: 1px solid #CCC;
  padding: 10px;
`

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
