// @flow
import React from 'react'
import { TagStyle, TagCloseStyle } from './style'

import type { Tag } from 'coderbox-components'

type Props = {
  tags: Tag[],
  palette?: string,
  withClose?: boolean,
  onClick?: (tag: Tag) => void,
}

const TagsComponent = ({
  tags = [],
  palette = 'grayscale',
  withClose = false,
  onClick,
  ...props
}: Props) => {
  const TagElement = withClose ? TagCloseStyle : TagStyle

  return (
    <div {...props}>
      {tags.map((tag, index) => {
        return (
          <TagElement
            key={index}
            palette={palette}
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
