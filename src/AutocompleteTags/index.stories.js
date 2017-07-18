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
  .add('simple usage', () => {
    return (
      <div>
        <AutocompleteTags
          isPrimary
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
          isGrayscale
          suggestions={technologies}
          placeholder='Add technology (ex: java, react)' />
      </div>
    )
  })
