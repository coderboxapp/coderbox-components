
import React from 'react'
import { storiesOf, action } from '@storybook/react'
import DatePicker from '.'

storiesOf('DatePicker', module)
  .add('default', () => {
    return <DatePicker onChange={action('date selected: ')} />
  })
