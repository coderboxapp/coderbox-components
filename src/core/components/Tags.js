// @flow
import React from 'react'
import { TagStyle, TagCloseStyle } from '../styles'

import type { Tag } from 'coderbox-components'

type Props = {
  tags: Tag[],
  className?: string,
  color?: 'base' | 'primary' | 'success',
  withClose?: boolean,
  onClick?: (tag: Tag) => void,
}

const TagsComponent = ({
  tags = [],
  color = 'base',
  withClose = false,
  className = '',
  onClick
}: Props) => {
  const TagElement = withClose ? TagCloseStyle : TagStyle

  return (
    <div className={`Tags ${className}`}>
      {tags.map((tag, index) => {
        return (
          <TagElement
            key={index}
            color={color}
            onClick={() => onClick && onClick(tag)}
          >
            {tag.name}
          </TagElement>
        )
      })}
    </div>
  )
}

export default TagsComponent
