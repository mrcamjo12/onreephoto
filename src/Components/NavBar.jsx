import React from 'react'
import { useGlobalContext } from '../context'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const {isSidebarOpen, openSidebar, closeSidebar} = useGlobalContext()
    return (
    <div className='navbar'>
       <div>
            {isSidebarOpen ? (
                <button  className='sidebar-toggle' onClick={closeSidebar}>
                  <FaTimes />
                </button>
            ) : (
                <button  className='sidebar-toggle' onClick={openSidebar}>
                  <FaBars />
                </button>
            )}
        </div>
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