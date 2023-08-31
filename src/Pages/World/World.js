import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'


const About = () => {
  const {openSidebar} = useGlobalContext()
    return (
    <main className=''>
     <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
     <h1>This is the world photos page</h1>
    </main>
  )
}

export default About
