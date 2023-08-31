import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import Henry from './About-photos/Henry.jpg'



const About = () => {
  const {openSidebar} = useGlobalContext()
    return (
    <main className=''>
     <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
     <h1>This is the about page</h1>
     <img src={Henry} alt='henry' className='about-contents'></img>
    </main>
  )
}

export default About
