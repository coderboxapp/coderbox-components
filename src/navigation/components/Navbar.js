import React from 'react'
import { object, bool, func, string, oneOfType } from 'prop-types'
import { browserHistory } from 'react-router'

// components
import Flex from '../../flexbox'
import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarBody from './NavbarBody'

// styles
import { NavbarStyle } from '../styles'

class Navbar extends React.Component {
  state = { open: false }

  static propTypes = {
    fixed: bool,
    brand: oneOfType([func, string, object]),
    className: string
  }

  static contextTypes = { router: object }

  componentDidMount () {
    if (browserHistory) {
      browserHistory.listen(() => this.setState({ open: false }))
    }
  }

  toggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    let { brand, fixed, className } = this.props

    return (
      <NavbarStyle
        row
        fixed={fixed}
        className={`Navbar ${className || ''}`}
        justifyContent='space-between'
        alignItems='center'>
        <NavbarToggler onClick={() => this.toggle()} />
        <NavbarBrand>{brand}</NavbarBrand>
        <NavbarBody isOpen={this.state.open} onClose={() => this.toggle()}>
          {this.props.children}
        </NavbarBody>
      </NavbarStyle>
    )
  }
}

export default Navbar
