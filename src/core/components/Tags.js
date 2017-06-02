// @flow
import React from 'react'
import { TagStyle, TagCloseStyle } from '../styles'

import type { Tag } from 'coderbox'

type Props = {
  tags: Tag[],
  color?: 'base' | 'primary' | 'success',
  withClose?: boolean,
  onClick?: (tag: Tag) => void
}

const TagsComponent = ({ tags = [], color = 'base', withClose = false, onClick }: Props) => {
  const TagElement = withClose ? TagCloseStyle : TagStyle

  return (
    <div>
      {
        tags.map((tag, index) => {
          return <TagElement key={index} color={color} onClick={() => onClick && onClick(tag)}>{tag.name}</TagElement>
        }
      )}
    </div>
  )
}

export default TagsComponent
