import styled from 'styled-components'

export const AutocompleteTagsStyle = styled.div`
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 4px;

  & input {
    border: 1px dashed #e8e8e8 !important;
  }
`

export const TagsStyle = styled.div`
  display: ${p => p.display ? 'block' : 'none'};
  margin-bottom: 4px;
`
