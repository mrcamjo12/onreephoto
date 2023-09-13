import Henry from './About-photos/Henry.jpg'



const About = () => {
    return (
    <main>
      <div className='container'>
        <br></br>
        <div className='hc h1'>
          <h1>about henry tran</h1>
        </div>
           <img src={Henry} alt='henry' className='hc hc2'></img>
          <h4 className='hc'>
            Henry is a fan of the Los Angeles Dodgers, Los Angeles Rams, 
            and Los Angeles Kings. His love for sports and photography 
            led him to sports photography. Whether the day be hot or rainy, 
            Henry shows up to take pictures with his lenses and memory 
            cards in tow. Henry is a taurus and likes the dumplings of 
            Chef Tony in Pasadena. </h4>
      </div>
    </main>
  )
}

export default About
