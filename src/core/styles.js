import styled from 'styled-components'
import { toPx } from '../utils'

export const AvatarContainer = styled.div`
  display: inline-block;
  padding: 10px;
  border: 1px solid ${props => props.theme.borderColors['base']};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadow};
  background-color: white;
  text-align: center;
`

export const AvatarImage = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.theme.borderRadius};
  background-image: url('${props => props.image}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export const Button = styled.button`
  display: inline-block;
  border: none;
  border-radius: 0px;
  padding: 8px 35px;
  font-family: inherit;
  font-weight: 400;
  color: ${props => props.theme.textColors[props.color]};
  background: ${props => props.theme.colors[props.color]};
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.80;
  }
`

export const Logo = styled.div`
  display: 'inline-block';
  vertical-align: 'middle';
  width: ${props => props.size};
  height: ${props => props.size};
`

export const LogoSvg = styled.svg`
  fill: ${props => props.theme.colors[props.color]};
`

export const Tag = styled.div`
  display: inline-block;
  font-family: 'Inconsolata', monospace;
  font-size: 12px;
  margin: 2px 4px 2px 0px;
  padding: 0px 12px 0px 12px;
  border: 1px solid ${props => props.theme.borderColors[props.color]};
  box-shadow: ${props => props.theme.shadow};
  color: ${props => props.theme.textColors[props.color]};
  background: ${props => props.theme.colors[props.color]};
  cursor: pointer;
  text-transform: lowercase;
  outline: none;
  border-radius: 2px;
  line-height: 22px;

  &:hover {
    opacity: 0.85;
  }
`

export const TagClose = styled(Tag)`
  padding-right: 0;

  &:after {
    display: inline-block;
    content: '\\2715';
    font-size: 11px;
    border-left: 1px solid ${props => props.theme.borderColors[props.color]};
    margin-left: 8px;
    width: 23px;
    text-align: center;
    vertical-align: middle;
  }
`
export const Container = styled.div`
  position: relative;
  border: 1px solid #CCC;
  padding: 5px;
  margin: 10px auto;
  min-width: ${p => toPx(p.width) || 'auto'};
  min-height: ${p => toPx(p.height) || 'auto'};
  display: ${p => p.inline ? 'inline-block' : 'block'};
`

export const Label = styled.div`
  color: #888;
  font-size: 12px;
  margin: 5px;
`
