import styled from 'styled-components'
import Flex from '../flexbox'

export const NavbarStyle = styled(Flex)`
  border: 1px solid red;
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
