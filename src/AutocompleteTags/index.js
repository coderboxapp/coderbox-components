// @flow
import React from 'react'
import { findIndex, remove, last, isArray, assign } from 'lodash'
import Tags from 'Tags'
import Autocomplete from 'Autocomplete'
import { styleProps } from 'styled-utils'

// styles
import { AutocompleteTagsWrapper, TagsWrapper } from './styles'

// Types
import type { Tag, Colors } from 'coderbox-components'

type Props = Colors & {
  value: Tag[],
  suggestions: Tag[],
  allowNew: boolean,
  toLowercase: boolean,
  placeholder?: string,
  onChange?: (tags: Tag[]) => void
}

type State = {
  tags: Tag[],
  suggestion: ?Tag,
}

const Keys = {
  ENTER: 13,
  TAB: 9,
  COMMA: 188,
  BACKSPACE: 8,
  UP_ARROW: 38,
  DOWN_ARROW: 40
}

class AutocompleteTags extends React.Component<any, Props, State> {
  static defaultProps = {
    allowNew: false,
    toLowercase: false
  }

  state = {
    tags: this.props.value || [],
    suggestion: null
  }

  componentWillReceiveProps (nextProps: Props) {
    if (nextProps.value && isArray(nextProps.value)) {
      this.setState({ tags: nextProps.value })
    }
  }

  addTag (tag: Tag) {
    let tags = this.state.tags.concat()

    if (findIndex(tags, t => t.name === tag.name) === -1) {
      tags.push(
        assign({}, tag, {
          name: this.props.toLowercase
            ? tag.name.toLocaleLowerCase()
            : tag.name
        })
      )

      if (this.props.allowNew) {
        this.setState({ tags: tags })
        if (this.props.onChange) {
          this.props.onChange(tags)
        }
      } else {
        if (findIndex(this.props.suggestions, t => t.name === tag.name) > -1) {
          this.setState({ tags: tags })
          if (this.props.onChange) {
            this.props.onChange(tags)
          }
        }
      }
    }
  }

  removeTag (tag: Tag) {
    let tags = remove(this.state.tags, t => t.name !== tag.name)

    this.setState({ tags: tags })

    if (this.props.onChange) {
      this.props.onChange(tags)
    }
  }

  onKeyDown (evt: KeyboardEvent) {
    if (evt.keyCode === Keys.ENTER || evt.keyCode === Keys.COMMA) {
      evt.preventDefault()

      if (this.state.suggestion) {
        this.addTag(this.state.suggestion)
        this.setState({ suggestion: null })
      }
    }

    if (evt.keyCode === Keys.BACKSPACE && this.state.tags.length > 0) {
      if (!this.state.suggestion || this.state.suggestion.name === '') {
        this.removeTag(last(this.state.tags))
      }
    }
  }

  render () {
    let { suggestions, placeholder, ...props } = this.props
    let { tags, suggestion } = this.state
    let colors = styleProps(props)

    return (
      <AutocompleteTagsWrapper {...props}>
        <TagsWrapper display={tags.length > 0}>
          <Tags
            tags={tags}
            onClick={tag => this.removeTag(tag)}
            withClose
            {...colors}
          />
        </TagsWrapper>
        <Autocomplete
          value={suggestion}
          suggestions={suggestions}
          placeholder={placeholder}
          onChange={(suggestion: Tag) =>
            this.setState({ suggestion: suggestion })}
          onKeyDown={(evt: KeyboardEvent) => this.onKeyDown(evt)}
        />
      </AutocompleteTagsWrapper>
    )
  }
}

export default AutocompleteTags
