import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'
import Flex from 'Flexbox'

export const DatePickerStyle = styled(Flex)`
  & select {
    border: 1px solid;
    border-color: ${palette(1)};
    border-radius: ${size('radius')};
    font-family: ${font('primary')};
    font-size: ${size('fontSize')};
    box-sizing: border-box;
    padding: 4px 4px;
    outline: none;
  }

  & select:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & select:last-child {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`
