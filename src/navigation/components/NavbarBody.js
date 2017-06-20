import React from 'react'
import Flex from '../../flexbox'

const NavbarBody = ({ isOpen, onClose, children }) => {
  const styleName = isOpen ? 'NavbarBody-open' : 'NavbarBody'

  return (
    <div className={styleName}>
      <Flex className='items'>
        {children}
      </Flex>
      <div className='overlay' onClick={onClose} />
    </div>
  )
}

export default NavbarBody
