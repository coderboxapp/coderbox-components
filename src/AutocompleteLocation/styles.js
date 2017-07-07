import styled from 'styled-components'
import { font } from 'styled-theme'

export const AutocompleteLocationStyle = styled.div`
  & input {
    width: 100%;
    box-sizing: border-box;
    font-family: ${font('primary')};
    font-size: 14px;
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    padding: 8px 8px;
    outline: none;
  }
`
