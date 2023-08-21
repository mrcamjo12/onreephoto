import React from 'react'
import '../src/App.css'
import Sidebar from './global/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Flight from './pages/flight/Flight'
import Sports from './pages/sports/Sports'
import World from './pages/world/World'
import People from './pages/people/People'
import Clients from './pages/clients/Clients'





export default function App() {
  return (
    <div>
      <title>onree photography</title>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/flight' element={<Flight />}/>
          <Route path='/sports' element={<Sports />}/>
          <Route path='/world' element={<World />}/>
          <Route path='/people' element={<People />}/>
          <Route path='/clients' element={<Clients />}/>
        </Routes>
      </Sidebar>
    </div>
  )
}
