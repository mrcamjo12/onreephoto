import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import HomeImages from '../Home/homeimages'

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