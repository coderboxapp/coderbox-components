// @flow
import React from 'react'
import { Tag, TagClose } from '../styles'

type TagType = {
  _id: number,
  name: string
}

type Props = {
  tags: TagType[],
  color: 'base' | 'primary',
  withClose: boolean,
  onClick: (tag: TagType) => void
}

const TagsComponent = ({ tags = [], color = 'base', withClose = false, onClick }: Props) => {
  const TagElement = withClose ? TagClose : Tag

  return (
    <div>
      {
        tags.map(tag => {
          return <TagElement key={tag._id} color={color} onClick={() => onClick && onClick(tag)}>{tag.name}</TagElement>
        }
      )}
    </div>
  )
}

export default TagsComponent
