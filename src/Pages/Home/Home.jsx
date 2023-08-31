import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import HomeImages from './homeimages'


const Home = () => {
  const {openSidebar} = useGlobalContext()
    return (
    <main className=''>
     <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <HomeImages />
    </main>
  )
}

export default Home
