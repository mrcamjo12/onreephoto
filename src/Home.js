import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import HomeImages from './images'
import logo from './logo.svg'

const Home = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <main>

      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      
         <div className='container'>
          <a href='/' className='main-logo'>
            <img src={logo} alt='onree photography'></img>
          </a>
          <HomeImages className='home-contents'/>
        </div>

    </main>
  )
}

export default Home
