import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import FlightImages from './flightimages'


const Flight = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <main>

          <button className='sidebar-toggle' onClick={openSidebar}>
            <FaBars />
           </button>        
           <FlightImages />
    </main>
  )
}

export default Flight
