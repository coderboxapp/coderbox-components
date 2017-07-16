import styled from 'styled-components'
import { font, size } from 'styled-theme'
import { hasBorder, textColor, bgColor, borderColor, toPx } from 'styled-utils'

export const ButtonWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: ${p => hasBorder(p) ? borderColor(p) : 'transparent'};
  background-color: ${bgColor};
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
