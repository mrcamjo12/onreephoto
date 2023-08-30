import React from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home/Home'
import Flight from './Pages/Flight/Flight'

import { social, links } from './data'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <Sidebar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/flight' element={<Flight />} />
      </Routes>


        <ul className='social-icons'>
        {social.map((link) => {
          const {id, url, icon} = link;
          return (
            <li key={id}>
              <a href={url} target='_blank' rel="noreferrer">{icon}</a>
            </li>
          )
        })}  
        </ul>
    </>
  )
}

export default App
