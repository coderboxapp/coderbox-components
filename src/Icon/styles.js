import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { toPx } from '../utils'

export const IconStyle = styled.i`
  color: ${palette(1, {grayscale: 0})};
  font-size: ${p => toPx(p.size) || size('iconSize')};
`
