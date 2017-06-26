
import React from 'react'
import { storiesOf, action } from '@storybook/react'
import DatePicker from '.'

storiesOf('DatePicker', module)
  .addWithInfo('simple usage', () => {
    return <DatePicker onChange={action('date selected: ')} />
  })
