import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'
import { toPx } from '../utils'

const backgroundColor = p => palette(1, {grayscale: 3})
const borderColor = p => palette(0, {grayscale: 2})
const textColor = p => p.palette === 'grayscale' ? palette('grayscale', 0) : palette('grayscale', 4)

export const ButtonStyle = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: ${p => p.withBorder ? '1px solid' : 'none'};
  border-color: ${borderColor};
  background-color: ${backgroundColor};
  color: ${textColor};
  border-radius: ${p => toPx(p.radius) || 0};
  padding: 8px 35px;
  font-family: ${font('primary')};
  font-size: ${size('fontSize')};
  font-weight: 400;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${p => palette(0, {grayscale: 2})}
  }

  & i {
    margin-right: 6px;
    font-size: ${size('iconSize')};
    color: ${textColor};
  }
`
