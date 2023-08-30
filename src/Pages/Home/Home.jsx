import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import HomeImages from './homeimages'
import {Link} from 'react-router-dom'

const Home = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <main>

          <button className='sidebar-toggle' onClick={openSidebar}>
            <FaBars />
           </button>
           <HomeImages />
          

    </main>
  )
}

export default Home
