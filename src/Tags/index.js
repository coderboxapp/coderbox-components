// @flow
import React from 'react'
import { array } from 'prop-types'
// import { findIndex } from 'lodash'

// styles
import { TagStyle, TagCloseStyle } from './styles'

// types
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
  selected: array
}

Tags.defaultProps = {
  selected: [],
  withClose: false,
  palette: 'white'
}
export default Tags
