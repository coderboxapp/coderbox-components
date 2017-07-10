import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { fromProps, toPx } from 'styled-utils'

export const IconStyle = styled.i`
  color: ${p => palette(fromProps(p), 1, {grayscale: 0})};
  font-size: ${p => toPx(p.size) || size('iconSize')};
`
