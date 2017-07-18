import styled from 'styled-components'
import { size } from 'styled-theme'
import { bgColor, toPx } from 'styled-utils'

export const IconStyle = styled.i`
  color: ${bgColor};
  font-size: ${p => toPx(p.size) || size('iconSize')};
`
