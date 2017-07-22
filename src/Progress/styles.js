import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'
import { bgColor } from 'styled-utils'

export const ProgressElement = styled.meter`
  position: relative;
  width: 100%;
  border: none;
  border-radius: 999px;
  display: block;
  height: ${p => (p.isSmall ? '8px' : p.isLarge ? '24px' : '16px')};
  overflow: hidden;
  padding: 0;
  margin: 5px 0;

  &::-webkit-meter-bar {
    background: none;
    background-color: ${palette('grayscale', 2)};
  }

  &::-webkit-meter-optimum-value {
    background: none;
    background-color: ${bgColor};
  }
`

export const ProgressLabels = styled.div`
  font-family: ${font('primary')};
  font-size: ${size('fontSize')};
  display: flex;
  justify-content: space-between;
  color: ${bgColor};
`
