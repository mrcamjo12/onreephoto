import Airplane from './Home-Photos/airplane.jpg'
import Hoop from './Home-Photos/hoop.jpg'
import PierHanger1 from './Home-Photos/pierhenge1.jpg'
import VeniceNight from './Home-Photos/venicenight.jpg'

const HomeImages = () => {
    return (
        <div className='container'>
           <div className='home-contents'>
             <h1>onree photography</h1>
             <p>Los Angeles based Photographer</p>
           </div>
           <img src={Airplane} alt='airplane' className='home-contents'></img>
           <br></br>
           <img src={Hoop} alt='hoop' className='home-contents'></img>
           <br></br>
           <img src={PierHanger1} alt='pier' className='home-contents'></img>
           <br></br>
           <img src={VeniceNight} alt='venice' className='home-contents'></img>
           <br></br>
        </div>
    )

}

export default HomeImages
