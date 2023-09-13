import Four05 from './Flight-Photos/405getty.jpg'
import FoggyFreeway from './Flight-Photos/foggyfreeway.jpg'
import Griffith from './Flight-Photos/griffith.jpg'
import Hollywood from './Flight-Photos/hollywood.jpg'
import Lacc from './Flight-Photos/lacc.jpg'


const FlightImages = () => {
    return (
        <div className='container'>
           <div className='hc hc1'>
             <h3>drone</h3>
           </div>
           <img src={Four05} alt='405' className='hc hc2'></img>
           <br></br>
           <img src={FoggyFreeway} alt='Foggy-Freeway' className='hc hc2'></img>
           <br></br>
           <img src={Griffith} alt='Griffith' className='hc hc2'></img>
           <br></br>
           <img src={Hollywood} alt='Hollywood' className='hc hc2'></img>
           <br></br>
           <img src={Lacc} alt='Lacc' className='hc hc2'></img>
           <br></br>
        </div>
    )

}

export default FlightImages
