import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { links } from '../data'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        {/* <button className='close-btn' onClick={closeSidebar} id='c-btn'>
          <FaTimes />
        </button> */}
       <ul className='links'>
        {links.map((link)=> {
          const {id, url, text} = link
          return <li key={id}>
            <a href={url}>
              {text}
            </a>
          </li>
        })}
      </ul>
  </aside>
  )
}

export default Sidebar
