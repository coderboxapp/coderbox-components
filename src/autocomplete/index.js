// @flow
import React from 'react'
import Autosuggest from 'react-autosuggest'
import { trim } from 'lodash'
import styles from './styles'
import type { Tag } from 'coderbox-components'

type Props = {
  value?: Tag,
  suggestions: Tag[],
  placeholder: string,
  onChange: (suggestion: Tag) => void,
  onKeyDown: (event: KeyboardEvent) => void,
  renderSuggestion: () => void
}

type State = {
  searchText: string,
  suggestion: ?Tag,
  suggestions: Tag[]
}

type SuggestionData = {
  suggestion: Tag
}

class AutoComplete extends React.Component<any, Props, State> {
  state = {
    searchText: '',
    suggestion: null,
    suggestions: []
  }

  componentWillMount () {
    if (this.props.value) {
      this.setState({ searchText: this.props.value.name || '' })
    }
  }

  componentWillReceiveProps (nextProps: Props) {
    if (nextProps.value === null) {
      this.setState({ searchText: '' })
    }

    if (nextProps.value) {
      this.setState({ searchText: nextProps.value.name || '' })
    }
  }

  renderSuggestion (suggestion: Tag) {
    return (
      <div>
        {suggestion.name}
      </div>
    )
  }

  fetchSuggestions (value: string) {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : this.props.suggestions
          .filter(c => {
            var m = c.name.toLowerCase().match(inputValue)
            return m && m.length > 0
          })
          .slice(0, 4)
  }

  firstSuggestion (value: string) {
    const inputValue = value.trim()
    const inputLength = inputValue.length

    return (inputLength === 0
      ? []
      : this.props.suggestions.filter(s => {
        return s.name === inputValue
      })).shift()
  }

  onSuggestion (event: Event, data: SuggestionData) {
    this.setState({ suggestion: data.suggestion })
  }

  onChange (event :Event, data: { newValue: string }) {
    this.setState({ searchText: trim(data.newValue) })
    if (this.props.onChange) {
      this.props.onChange(this.firstSuggestion(data.newValue) || { name: trim(data.newValue) })
    }
  }

  onKeyDown (event: KeyboardEvent) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event)
    }
  }

  onSuggestionsFetchRequested (data: { value: string }) {
    this.setState({ suggestions: this.fetchSuggestions(data.value) })
  }

  onSuggestionsClearRequested () {
    this.setState({ suggestions: [] })
  }

  render () {
    const { suggestions } = this.state
    const inputProps = {
      placeholder: this.props.placeholder,
      value: this.state.searchText,
      onChange: (e: Event, data: { newValue: string }) => this.onChange(e, data),
      onKeyDown: (e: KeyboardEvent) => this.onKeyDown(e)
    }

    return (
      <Autosuggest
        theme={styles}
        suggestions={suggestions}
        getSuggestionValue={(suggestion: Tag) => suggestion.name}
        renderSuggestion={this.props.renderSuggestion || this.renderSuggestion}
        onSuggestionSelected={(e: Event, data: SuggestionData) => this.onSuggestion(e, data)}
        onSuggestionsFetchRequested={(data: { value: string }) => this.onSuggestionsFetchRequested(data)}
        onSuggestionsClearRequested={() => this.onSuggestionsClearRequested()}
        shouldRenderSuggestions={(value: string) => value.trim().length > 1}
        inputProps={inputProps}
      />
    )
  }
}

export default AutoComplete
