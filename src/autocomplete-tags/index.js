// @flow
import React from 'react'
import { findIndex, remove, last, isArray, assign } from 'lodash'
import { AutocompleteTagsStyle, TagsStyle } from './styles'
import { Tags } from '../core'
import Autocomplete from '../autocomplete'

import type { Tag } from 'coderbox-components'

type Props = {
  value: Tag[],
  suggestions: Tag[],
  allowNew: boolean,
  toLowercase: boolean,
  placeholder?: string,
  onChange?: (tags: Tag[]) => void,
  color?: 'base' | 'primary' | 'success'
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
    color: 'primary',
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
      tags.push(assign(
        ...tag,
        {name: this.props.toLowercase ? tag.name.toLocaleLowerCase() : tag.name}
      ))

      if (this.props.allowNew) {
        this.setState({tags: tags})
        if (this.props.onChange) {
          this.props.onChange(tags)
        }
      } else {
        if (findIndex(this.props.suggestions, t => t.name === tag.name) > -1) {
          this.setState({tags: tags})
          if (this.props.onChange) {
            this.props.onChange(tags)
          }
        }
      }
    }
  }

  removeTag (tag: Tag) {
    let tags = remove(this.state.tags, t => t.name !== tag.name)

    this.setState({tags: tags})

    if (this.props.onChange) {
      this.props.onChange(tags)
    }
  }

  onKeyDown (e: KeyboardEvent) {
    if (
      e.keyCode === Keys.ENTER ||
      e.keyCode === Keys.COMMA
    ) {
      e.preventDefault()

      if (this.state.suggestion) {
        this.addTag(this.state.suggestion)
        this.setState({suggestion: null})
      }
    }

    if (e.keyCode === Keys.BACKSPACE && this.state.tags.length > 0) {
      if (!this.state.suggestion || this.state.suggestion.name === '') {
        this.removeTag(last(this.state.tags))
      }
    }
  }

  render () {
    let { suggestions, color, placeholder } = this.props
    let { tags, suggestion } = this.state

    return (
      <AutocompleteTagsStyle className='react-autocomplete-tags'>
        <TagsStyle display={tags.length > 0}>
          <Tags color={color} tags={tags} onClick={(tag) => this.removeTag(tag)} withClose />
        </TagsStyle>
        <Autocomplete
          value={suggestion}
          suggestions={suggestions}
          placeholder={placeholder}
          onChange={s => this.setState({suggestion: s})}
          onKeyDown={e => this.onKeyDown(e)}
        />
      </AutocompleteTagsStyle>
    )
  }
}

export default AutocompleteTags
