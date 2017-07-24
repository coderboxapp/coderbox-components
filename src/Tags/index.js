// @flow
import React from 'react'
import { array } from 'prop-types'
import { findIndex, omit, keys } from 'lodash'
import { styleProps, removeStyleProps } from 'styled-utils'

// styles
import { TagStyle, TagCloseStyle } from './styles'

// types
import type { Tag, Colors } from 'coderbox-components'

type Props = Colors & {
  tags: Tag[],
  selected?: Tag[],
  selectedProps?: Colors,
  withClose?: boolean,
  onClick?: (tag: Tag) => void,
}

const Tags = ({
  tags = [],
  selected = [],
  selectedProps,
  withClose,
  onClick,
  ...props
}: Props) => {
  const TagElement = withClose ? TagCloseStyle : TagStyle
  const isSelected = (tag) => findIndex(selected, s => s.name === tag.name) > -1

  return (
    <div>
      {tags.map((tag, index) => {
        const styles = styleProps(isSelected(tag) ? selectedProps : props)
        const rest = removeStyleProps(props)

        return (
          <TagElement
            key={index}
            onClick={() => onClick && onClick(tag)}
            {...styles}
            {...rest} >
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
  selectedProps: {},
  withClose: false,
  palette: 'white'
}
export default Tags
