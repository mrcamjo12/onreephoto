import React from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Flight from './Pages/Flight/Flight'
import Sports from './Pages/Sports/Sports'
import World from './Pages/World/World'
import People from './Pages/People/People'
import Clients from './Pages/Clients/Clients'
import { social } from './data'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home />
      <Flight /> */}
      <Sidebar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/flight' element={<Flight />} />
         <Route path='/sports' element={<Sports />} />
         <Route path='/world' element={<World />} />
         <Route path='/people' element={<People />} />
         <Route path='/clients' element={<Clients />} />
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
