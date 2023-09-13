import Airplane from './Home-Photos/airplane.jpg'
import Hoop from './Home-Photos/hoop.jpg'
import PierHanger1 from './Home-Photos/pierhenge1.jpg'
import VeniceNight from './Home-Photos/venicenight.jpg'

const HomeImages = () => {
       return (
        <div className='container'>
           <div className='hc hc1'>
              <br></br>
             <h3>Henry Tran</h3>
             <h4>Los Angeles Photographer</h4>
           </div>
           <img src={Airplane} alt='airplane' className='hc hc2'></img>
           <br></br>
           <img src={Hoop} alt='hoop' className='hc hc2'></img>
           <br></br>
           <img src={PierHanger1} alt='pier' className='hc hc2'></img>
           <br></br>
           <img src={VeniceNight} alt='venice' className='hc hc2'></img>
           <br></br>
        </div>
    )

}

export default HomeImages
