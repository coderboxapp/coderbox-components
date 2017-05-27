// @flow
export type Suggestion = {
  name: string
}

export type Props = {
  value: ?Suggestion,
  suggestions: Suggestion[],
  onChange: (suggestion: Suggestion) => void,
  placeholder: string,
  renderSuggestion: Function
}

export type State = {
  searchText: string,
  suggestion: ?Suggestion,
  suggestions: Suggestion[]
}
