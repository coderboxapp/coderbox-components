import styled from 'styled-components'
import Flex from '../flexbox'
import { mobileAndTablet } from '../queries'

export const NavbarStyle = styled(Flex)`
  position: ${p => (p.fixed ? 'fixed' : 'relative')};
  z-index: 1000;
  min-height: 50px;
  box-sizing: border-box;
  padding-bottom: 3px;
  background: white;

  &:after {
    background: linear-gradient(to right, ${p => p.theme.colors.primary}, ${p => p.theme.colors.primaryLight});
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
  }
`

export const NavbarBodyStyle = styled.div`
  & .items { z-index: 200; }
  & .overlay {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: opacity 0.25s;
    z-index: 100;
  }

  ${mobileAndTablet} {
    & .items {
      position: fixed;
      flex-direction: column;
      top: 0;
      right: ${p => p.isOpen ? '0px' : '-141px'};
      width: 140px;
      bottom: 0;
      background: white;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
      transition: right 0.25s;
    }
    & .overlay {
      display: ${p => p.isOpen ? 'block' : 'none'};
    }
  }
`

export const NavbarItemStyle = styled.div`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  padding: 8px 16px;
  margin: 0px;
  color: black;
  font-family: inherit;
  box-sizing: border-box;
  i {
    display: block;
  }
  &:hover, &.active {
    color: ${p => p.theme.colors.primary};
  }

  ${mobileAndTablet} {
    width: 100%;
    padding: 15px 15px;
    border-bottom: 1px solid #ECEFF2;
  }
`

export const NavbarTogglerStyle = styled.a`
  display: none;
  position: absolute;
  top: 16px;
  right: 10px;
  i {
    color: ${p => p.theme.colors.gray};
    font-size: 33px;
  }

  ${mobileAndTablet} {
    display: block;
  }
`

export const NavbarBrandStyle = styled.div`
  padding: 10px;
  border-right: 1px solid #ECEFF2;
  svg {
    fill: ${p => p.theme.colors.primary};
  }
`
