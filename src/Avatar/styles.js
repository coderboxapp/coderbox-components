import styled from 'styled-components'
import { palette, size, key } from 'styled-theme'
import { toPx } from '../utils'

export const AvatarStyle = styled.div`
  display: inline-block;
  padding: ${p => toPx(p.padding) || '10px'};
  border: 1px solid;
  border-color: ${palette('grayscale', 2)};
  border-radius: ${size('radius')};
  box-shadow: ${key(['shadows', 'normal'])};
  background-color: white;
  text-align: center;
`

export const AvatarImageStyle = styled.div`
  width: ${p => toPx(p.size)};
  height: ${p => toPx(p.size)};
  border-radius: ${size('radius')};
  background-image: url('${p => p.image}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`
