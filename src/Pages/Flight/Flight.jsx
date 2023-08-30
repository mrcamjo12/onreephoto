import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import {Link} from 'react-router-dom'

const Flight = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <main>

          <button className='sidebar-toggle' onClick={openSidebar}>
            <FaBars />
           </button>        
            <h1>Henry</h1>
    </main>
  )
}

export default Flight
