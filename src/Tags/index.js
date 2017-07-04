// @flow
import React from 'react'
import { TagStyle, TagCloseStyle } from './style'

import type { Tag } from 'coderbox-components'

type Props = {
  tags: Tag[],
  palette?: string,
  tone?: number,
  withClose?: boolean,
  onClick?: (tag: Tag) => void,
}

const TagsComponent = ({
  tags = [],
  palette,
  tone,
  withClose,
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
            tone={tone}
            onClick={() => onClick && onClick(tag)} >
            {tag.name}
          </TagElement>
        )
      })}
    </div>
  )
}

TagsComponent.defaultProps = {
  palette: 'grayscale',
  withClose: false,
  tone: 1
}
export default TagsComponent
