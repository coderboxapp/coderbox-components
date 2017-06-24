import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'

const backgroundColor = p => palette(1, {grayscale: 3})
const borderColor = p => palette(0, {grayscale: 2})
const textColor = p => p.palette === 'grayscale' ? palette('grayscale', 0) : palette('grayscale', 4)

export const TagStyle = styled.div`
  display: inline-block;
  font-family: ${font('primary')};
  font-size: ${size('fontSizeSmall')};
  margin: 2px 4px 2px 0px;
  padding: 0px 12px 0px 12px;
  border: 1px solid;
  border-color: ${borderColor};
  background-color: ${backgroundColor};
  color: ${textColor};
  box-shadow: ${p => p.theme.shadow};
  cursor: pointer;
  outline: none;
  border-radius: ${size('radius')};
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
