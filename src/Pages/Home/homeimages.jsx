import Airplane from './Home-Photos/airplane.jpg'
import Hoop from './Home-Photos/hoop.jpg'
import PierHanger1 from './Home-Photos/pierhenge1.jpg'
import VeniceNight from './Home-Photos/venicenight.jpg'

const HomeImages = () => {
    return (
        <div className='container'>
           <div className='home-contents'>
              <br></br>
             <h1>onree photography</h1>
             <h3>Henry Tran</h3>
             <h4>Los Angeles based Photographer</h4>
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
