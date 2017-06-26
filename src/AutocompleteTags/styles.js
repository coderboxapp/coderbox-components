import styled from 'styled-components'

export const AutocompleteTagsStyle = styled.div`
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 4px;

  & input {
    border: 1px dashed #D8D8D8 !important;
  }

  .pac-container {
    border: 1px solid red;
  }
`

export const TagsStyle = styled.div`
  display: ${p => p.display ? 'block' : 'none'};
  margin-bottom: 4px;
`
