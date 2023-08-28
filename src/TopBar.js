import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa'


const TobBar = () => {
    const { openSidebar } = useGlobalContext()
    return (
        <main>
           <div className='topbar'>     
            <button className='sidebar-toggle' onClick={openSidebar}>
            <FaBars />
            </button>
            <div className='topbar'>
               {/* <a href='/' className='main-logo'>
                <h1>onree photography</h1>
                </a> */}
            </div>
            </div>
        </main>
    )
}

export default TobBar