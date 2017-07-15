import styled from 'styled-components'
import { font, palette, key } from 'styled-theme'
import { fromProps, darken } from 'styled-utils'

const backgroundColor = p => palette(fromProps(p), p.tone)
const borderColor = p => darken(palette(fromProps(p), p.tone, p.reverse), 0.20)
const textColor = p => palette('grayscale', 0, true)

export const TagStyle = styled.div`
  display: inline-block;
  font-family: ${font('primary')};
  font-size: 12px;
  margin: 2px 4px 2px 0px;
  padding: 0 12px;
  border: 1px solid;
  border-color: ${borderColor};
  background-color: ${backgroundColor};
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
    border-color: ${borderColor};
    margin-left: 8px;
    width: 24px;
    text-align: center;
    vertical-align: middle;
  }
`
