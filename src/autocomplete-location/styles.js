import styled from 'styled-components'

export const AutocompleteLocationStyle = styled.div`
  & input {
    width: 100%;
    box-sizing: border-box;
    font-family: ${p => p.theme.fontFamily};
    font-size: 14px;
    border: 1px solid ${p => p.theme.borderColors.base};
    border-radius: 4px;
    padding: 8px 8px;
    outline: none;
  }
`
