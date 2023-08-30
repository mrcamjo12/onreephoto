import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { links } from '../data'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      
         <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
       <ul className='links'>
        {links.map((link)=> {
          const {id, url, text, icon} = link
          return <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        })}
      </ul>
      {/* <ul className='social-icons'>
        {social.map((link) => {
          const {id, url, icon} = link;
          return (
            <li key={id}>
              <a href={url} target='_blank' rel="noreferrer">{icon}</a>
            </li>
          )
        })}  
      </ul> */}
  </aside>
  )
}

export default Sidebar
