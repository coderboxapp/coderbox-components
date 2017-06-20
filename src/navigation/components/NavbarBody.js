import React from 'react'
import Flex from '../../flexbox'
import { NavbarBodyStyle } from '../styles'

const NavbarBody = ({ isOpen, onClose, children }) => {
  return (
    <NavbarBodyStyle isOpen={isOpen} className='NavbarBody'>
      <Flex className='items'>
        {children}
      </Flex>
      <div className='overlay' onClick={onClose} />
    </NavbarBodyStyle>
  )
}

export default NavbarBody
