import React from 'react'
import { string, bool, func, object } from 'prop-types'
import { NavbarItemStyle } from '../styles'

class NavbarItem extends React.Component {
  static propTypes = {
    icon: string,
    text: string,
    href: string,
    hide: bool,
    onClick: func
  }

  static defaultProps = {
    href: '',
    hide: false,
    onClick: () => true
  }

  static contextTypes = { router: object }

  isActive (name) {
    const { router } = this.context

    if (router) {
      return router.getCurrentLocation().pathname === name
    }

    return false
  }

  render () {
    let { href, icon, text, hide, onClick } = this.props
    if (hide) return null

    let isActive = this.isActive(href, null, false) ? ' active' : ''

    return (
      <NavbarItemStyle
        className={`NavbarItem${isActive}`}
        href={href}
        onClick={onClick}>

        <i className='material-icons'>{icon}</i> {text}
      </NavbarItemStyle>
    )
  }
}

export default NavbarItem
