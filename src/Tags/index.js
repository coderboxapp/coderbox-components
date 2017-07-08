// @flow
import React from 'react'
import { findIndex } from 'lodash'
import { TagStyle, TagCloseStyle } from './style'

import type { Tag } from 'coderbox-components'

type Props = {
  tags: Tag[],
  selected?: Tag[],
  palette?: string,
  selectedPalette?: string,
  tone?: number,
  withClose?: boolean,
  onClick?: (tag: Tag) => void,
}

const TagsComponent = ({
  tags = [],
  selected = [],
  palette,
  selectedPalette,
  tone,
  withClose,
  onClick,
  ...props
}: Props) => {
  const TagElement = withClose ? TagCloseStyle : TagStyle
  const isSelected = (tag) => findIndex(selected, s => s.name === tag.name) > -1

  return (
    <div {...props}>
      {tags.map((tag, index) => {
        return (
          <TagElement
            key={index}
            palette={isSelected(tag) ? selectedPalette : palette}
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
  selectedPalette: 'primary',
  selected: [],
  withClose: false,
  tone: 1
}
export default TagsComponent
