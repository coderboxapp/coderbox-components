import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Autocomplete from '.'

const technologies = [
  { name: 'javascript' },
  { name: 'java' },
  { name: '.net' },
  { name: 'react' }
]

storiesOf('Autocomplete', module)
  .add('default', () => {
    return (
      <div>
        <label>Search technology:</label>
        <Autocomplete
          suggestions={technologies}
          placeholder='Try typing: java'
          onSuggestion={action('tag: ')} />
      </div>
    )
  })
