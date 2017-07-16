// @flow
import React from 'react'
import { array, string } from 'prop-types'
// import { findIndex } from 'lodash'
import { TagStyle, TagCloseStyle } from './style'

import type { Tag, Colors } from 'coderbox-components'

type Props = Colors & {
  tags: Tag[],
  selected?: Tag[],
  withClose?: boolean,
  onClick?: (tag: Tag) => void,
}

const Tags = ({
  tags = [],
  selected = [],
  palette,
  withClose,
  onClick,
  ...props
}: Props) => {
  const TagElement = withClose ? TagCloseStyle : TagStyle
  // const isSelected = (tag) => findIndex(selected, s => s.name === tag.name) > -1

  return (
    <div>
      {tags.map((tag, index) => {
        return (
          <TagElement
            key={index}
            palette={palette}
            onClick={() => onClick && onClick(tag)}
            {...props} >
            {tag.name}
          </TagElement>
        )
      })}
    </div>
  )
}

Tags.propTypes = {
  tags: array,
  selected: array,
  palette: string
}

Tags.defaultProps = {
  palette: 'white',
  selected: [],
  withClose: false
}
export default Tags
