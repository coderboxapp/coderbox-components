import styled from 'styled-components'
import { size, palette } from 'styled-theme'

const borderColor = p => palette('grayscale', 1)

export const AutocompleteTagsStyle = styled.div`
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid;
  border-color: ${borderColor};
  border-radius: ${size('radius')};

  & input {
    border: 1px dashed ${borderColor} !important;
  }

  .pac-container {
    border: 1px solid red;
  }
`

export const TagsStyle = styled.div`
  display: ${p => p.display ? 'block' : 'none'};
  margin-bottom: 4px;
`
