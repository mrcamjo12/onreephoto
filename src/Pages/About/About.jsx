import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import Henry from './About-photos/Henry.jpg'



const About = () => {
  const {openSidebar} = useGlobalContext()
    return (
    <main>
     <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <div className='about-container'>
        <br></br>
          <h1 className='about-item about-item1'>about</h1>
          <br></br>
          <h2 className='about-item about-item1'>henry tran</h2>
          <img src={Henry} alt='henry' 
          className='about-item about-item2 about photo'></img>
          <p className='about-item about-item3'>
            Henry is a fan of the Los Angeles Dodgers, Los Angeles Rams, 
            and Los Angeles Kings. His love for sports and photography 
            led him to sports photography. Whether the day be hot or rainy, 
            Henry shows up to take pictures with his lenses and memory 
            cards in tow. Henry is a taurus and likes the dumplings of 
            Chef Tony in Pasadena. </p>
     </div>
    </main>
  )
}

export default About
