import React from 'react'
import { useGlobalContext } from '../context'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  const {openSidebar, hideBtn} = useGlobalContext()
    return (
    <div className='navbar'>
     <button className='sidebar-toggle navbar1' onClick={openSidebar} id='side-btn'>
        <FaBars />
    </button>   
    <div className='navbar2'>
      <a href='/'>
        <h3>ht</h3>
      </a>
    </div>
    <div className='navbar3'>
      <a href='/'>
        <h3>onree photography</h3>
      </a>
    </div>
    </div>
  )
}

export default NavBar