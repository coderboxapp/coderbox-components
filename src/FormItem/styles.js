import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'

export const FormItemStyle = styled.div`
  padding: 5px 0px;
  font-family: ${font('primary')};
  font-size: ${size('fontSize')};

  & label {
    font-weight: 600;
    margin-bottom: 5px;
  }

  & textarea,
  & input[type="text"],
  & input[type="number"],
  & input[type="password"],
  & input[type="email"] {
    width: 100%;
    font-family: ${font('primary')};
    font-size: ${size('fontSize')};
    box-sizing: border-box;
    border: 1px solid;
    border-color: ${palette('grayscale', 1)};
    border-radius: ${size('radius')};
    padding: 8px 8px;
    outline: none;
  }
`
