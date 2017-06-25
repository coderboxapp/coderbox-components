
import React from 'react'
import { storiesOf, action } from '@storybook/react'
import DateRange from '.'

storiesOf('DateRange', module)
  .add('default', () => {
    return <DateRange onChange={action('date selected: ')} />
  })
