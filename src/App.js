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
import ScrollButton from './Components/ScrollButton'
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
      <NavBar />
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
      <ScrollButton />
        <div className='container'>
          <h4 className='hc hc1'>social media:</h4>
          <ul className='social-icons hc hc1'>
          {social.map((link) => {
            const {id, url, icon} = link;
              return (
              <li key={id}>
                <a href={url} target='_blank' rel="noreferrer">{icon}</a>
              </li>
           )
          })}  
          </ul>
        </div>  
    </>
  )
}

export default App
