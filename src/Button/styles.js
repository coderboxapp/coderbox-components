import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'
import { fromProps, toPx, darken } from 'styled-utils'

const backgroundColor = p => palette(fromProps(p), p.tone)
const borderColor = p => darken(palette(fromProps(p), p.tone, p.reverse), 0.15)
const textColor = p => palette('grayscale', 0, true)

export const ButtonStyle = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: ${p => p.withBorder ? '1px solid' : 'none'};
  border-color: ${borderColor};
  background-color: ${backgroundColor};
  color: ${textColor};
  border-radius: ${p => toPx(p.radius) || 0};
  padding: 0px 35px;
  line-height: 38px;
  font-family: ${font('primary')};
  font-size: ${size('fontSize')};
  font-weight: 400;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${p => palette((p.tone + 1) % 5)};
  }

  & i {
    margin-right: 6px;
    font-size: ${size('iconSize')};
    color: ${textColor};
  }
`
