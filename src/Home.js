import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import Airplane from './Photos/Home/airplane.jpg'
import Hoop from './Photos/Home/hoop.jpg'
import logo from './logo.svg'



const Home = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      
      <div className='img-parent'>
        <img src={logo} alt='onree photography' className='header-logo'></img>
        <article className='home-img'>
          <img src={Airplane} alt='airplane over LAX'></img>
          <p>A plane over the skies heading into LAX</p>
        </article>
        <img src={Hoop} alt='hoop in'></img>

      </div>
    </main>
  )
}

export default Home
