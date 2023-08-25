import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext()
  return (
    <main>
      <h1>onree photography</h1>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show modal</button>
    </main>
  )
}

export default Home
