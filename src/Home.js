import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import PhotoSlide from './Carousel'

const Home = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      
    </main>
  )
}

export default Home
