import styled from 'styled-components'
import { palette, font } from 'styled-theme'
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
  margin: 25px 0;

  &::-webkit-meter-bar {
    background: none;
    background-color: ${palette('grayscale', 2)};
  }

  &::-webkit-meter-optimum-value {
    background: none;
    background-color: ${bgColor};
  }

  &::before {
    content: '100$';
    position: absolute;
    top: -100%;
  }

  &::after {
    content: '800$';
    position: absolute;
    top: -100%;
    right: 0;
  }
`

  // &::-webkit-meter-bar {
  //   background-color: ${palette('grayscale', 2)}
  // }
  // &::-webkit-meter-inner-element {
  //   background-color: ${bgColor}
  // }
