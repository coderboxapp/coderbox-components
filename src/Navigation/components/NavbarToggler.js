import React from 'react'
import { NavbarTogglerStyle } from '../styles'

const NavbarToggler = ({ onClick }) => {
  return (
    <NavbarTogglerStyle className='NavbarToggler'>
      <i className='material-icons btn-open' onClick={onClick}>menu</i>
    </NavbarTogglerStyle>
  )
}

export default NavbarToggler
