import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'
import { fromProps, toPx } from 'styled-utils'

const isWhite = p => fromProps(p) === 'white'
const hasBorder = p => isWhite(p) || p.isOutlined
const tone = p => p.isGrayscale && !p.tone ? 1 : p.tone

const backgroundColor = p => p.isOutlined ? 'transparent' : palette(fromProps(p), tone(p))
const borderColor = p => isWhite(p) ? palette('grayscale', 2) : palette(fromProps(p), tone(p))
const textColor = p => p.isOutlined ? palette(fromProps(p), tone(p)) : palette('grayscale', 0, !isWhite(p))

export const ButtonWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: ${p => hasBorder(p) ? '1px solid' : 'none'};
  border-color: ${borderColor};
  background-color: ${backgroundColor};
  color: ${textColor};
  border-radius: ${p => toPx(p.radius) || '2px'};
  padding: 0px 35px;
  line-height: 38px;
  font-family: ${font('primary')};
  font-size: ${size('fontSize')};
  font-weight: 400;
  cursor: pointer;
  outline: none;

  & i {
    margin-right: 6px;
    font-size: ${size('iconSize')};
    color: ${textColor};
  }

  &:hover {
    opacity: 0.8;
  }
`
