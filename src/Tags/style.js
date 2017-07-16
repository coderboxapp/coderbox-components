import styled from 'styled-components'
import { font, key } from 'styled-theme'
import {
  bgColor,
  textColor,
  borderColor,
  hasBorder
} from 'styled-utils'

export const TagStyle = styled.div`
  display: inline-block;
  font-family: ${font('primary')};
  font-size: 12px;
  margin: 2px 4px 2px 0px;
  padding: 0 12px;
  border: 1px solid;
  border-color: ${p => hasBorder(p) ? borderColor(p) : 'transparent'};
  background-color: ${bgColor};
  color: ${textColor};
  border-radius: 2px;
  box-shadow: ${key(['shadows', 'light'])};
  cursor: pointer;
  outline: none;
  line-height: 22px;

  &:hover {
    opacity: 0.85;
  }
`

export const TagCloseStyle = styled(TagStyle)`
  padding-right: 0;

  &:after {
    display: inline-block;
    content: '\\2715';
    font-size: 11px;
    border-left: 1px solid;
    border-color: ${p => hasBorder(p) ? borderColor(p) : 'rgba(255, 255, 255, 0.5)'};
    margin-left: 8px;
    width: 24px;
    text-align: center;
    vertical-align: middle;
  }
`
