import styled from 'styled-components'
import { palette } from 'styled-theme'
import { fromProps } from 'styled-utils'

export const ProgressElement = styled.progress`
  width: 100%;
  border: none;
  border-radius: 999px;
  display: block;
  height: ${p => p.isSmall ? '8px' : p.isLarge ? '24px' : '16px'};
  overflow: hidden;
  padding: 0;

  &::-webkit-progress-bar {
    background-color: ${palette('grayscale', 2)}
  }
  &::-webkit-progress-value {
    background-color: ${p => palette(fromProps(p), p.tone)}
  }
`
