import styled from 'styled-components'
import { toPx, parseColor } from '../utils'

export const AvatarStyle = styled.div`
  display: inline-block;
  padding: 10px;
  border: 1px solid ${p => p.theme.borderColors.base};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: ${p => p.theme.shadow};
  background-color: white;
  text-align: center;
`

export const AvatarImageStyle = styled.div`
  width: ${p => p.size};
  height: ${p => p.size};
  border-radius: ${p => p.theme.borderRadius};
  background-image: url('${p => p.image}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export const ButtonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0px;
  padding: 8px 35px;
  font-family: inherit;
  font-weight: 400;
  color: ${p => parseColor(p.textColor, p.theme.textColors)};
  background: ${p => parseColor(p.color, p.theme.colors)};
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.80;
  }
`

export const LogoStyle = styled.div`
  display: 'inline-block';
  vertical-align: 'middle';
  width: ${p => p.size};
  height: ${p => p.size};
`

export const LogoSvgStyle = styled.svg`
  fill: ${p => p.theme.colors[p.color]};
`

export const TagStyle = styled.div`
  display: inline-block;
  font-family: 'Inconsolata', monospace;
  font-size: 12px;
  margin: 2px 4px 2px 0px;
  padding: 0px 12px 0px 12px;
  border: 1px solid ${p => p.theme.borderColors[p.color]};
  box-shadow: ${p => p.theme.shadow};
  color: ${p => p.theme.textColors[p.color]};
  background: ${p => p.theme.colors[p.color]};
  cursor: pointer;
  outline: none;
  border-radius: 2px;
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
    border-left: 1px solid ${p => p.theme.borderColors[p.color]};
    margin-left: 8px;
    width: 23px;
    text-align: center;
    vertical-align: middle;
  }
`
export const Container = styled.div`
  position: relative;
  border: 1px solid ${p => p.theme.borderColors.base};
  padding: 5px;
  margin: 10px auto;
  min-width: ${p => toPx(p.width) || 'auto'};
  min-height: ${p => toPx(p.height) || 'auto'};
  display: ${p => p.inline ? 'inline-block' : 'block'};
`
export const DemoContainer = Container.extend`
  text-align: left;
  padding: 45px 10px 5px 10px;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    padding: 1em;
    color: #aaa;
    font-size: smaller;
    font-weight: 500;
    content: 'EXAMPLE';
  }

  & > label {
    display: block;
    margin-bottom: 10px;
  }
`

export const Label = styled.div`
  color: #888;
  font-size: 12px;
  margin: 5px;
`
