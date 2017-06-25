import React from 'react'
import { NavbarBrandStyle } from '../styles'

const NavbarBrand = ({ children }) => {
  return (
    <NavbarBrandStyle className='NavbarBrand'>
      {children}
    </NavbarBrandStyle>
  )
}

export default NavbarBrand
