import React from 'react'
import { storiesOf, action } from '@storybook/react'
import AutocompleteLocation from '.'

storiesOf('AutocompleteLocation', module)
  .add('simple usage', () => {
    return (
      <div>
        <AutocompleteLocation
          placeholder='Type city'
          onChange={action('tag: ')} />
      </div>
    )
  })
