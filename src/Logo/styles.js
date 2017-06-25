
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { toPx } from '../utils'

export const LogoStyle = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: ${p => toPx(p.size)};
  height: ${p => toPx(p.size)};
`

export const LogoSvgStyle = styled.svg`
  fill: ${p => p.color || palette(1)};
`
