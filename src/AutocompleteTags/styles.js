import styled from 'styled-components'
import { size, palette } from 'styled-theme'

export const AutocompleteTagsWrapper = styled.div`
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid;
  border-color: ${palette('grayscale', 2)};
  border-radius: ${size('radius')};

  & input {
    border: 1px dashed ${palette('grayscale', 2)} !important;
  }
`

export const TagsWrapper = styled.div`
  display: ${p => p.display ? 'block' : 'none'};
  margin-bottom: 4px;
`
