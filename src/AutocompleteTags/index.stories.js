import React from 'react'
import { storiesOf } from '@storybook/react'
import AutocompleteTags from '.'

const technologies = [
  { name: 'javascript' },
  { name: 'java' },
  { name: 'redux' },
  { name: 'react' }
]

storiesOf('AutocompleteTags', module)
  .add('default', () => {
    return (
      <div>
        <AutocompleteTags
          suggestions={technologies}
          placeholder='Add technology (ex: java, react)' />
      </div>
    )
  })
  .add('with different color', () => {
    return (
      <div>
        <AutocompleteTags
          allowNew
          palette='danger'
          suggestions={technologies}
          placeholder='Add technology (ex: java, react)' />
      </div>
    )
  })
