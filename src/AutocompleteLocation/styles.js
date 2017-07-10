import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'

export const AutocompleteWrapper = styled.div`
  & input {
    width: 100%;
    box-sizing: border-box;
    font-family: ${font('primary')};
    font-size: ${size('fontSize')};
    border: 1px solid;
    border-color: ${palette('grayscale', 2)};
    border-radius: ${size('radius')};
    padding: 8px 8px;
    outline: none;
  }
`
