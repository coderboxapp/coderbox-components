import React from 'react'

const NavbarToggler = ({ onClick }) => {
  return (
    <div className='NavbarToggler'>
      <i className='material-icons btn-open' onClick={onClick}>
        menu
      </i>
    </div>
  )
}

export default NavbarToggler
