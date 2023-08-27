import Airplane from './Photos/Home/airplane.jpg'
import Hoop from './Photos/Home/hoop.jpg'
import PierHanger1 from './Photos/Home/pierhenge1.jpg'
import VeniceNight from './Photos/Home/venicenight.jpg'

const HomeImages = () => {
    return (
        <div>
            <img src={Airplane} alt='airplane'></img>
            <br></br>
            <img src={Hoop} alt='hoop'></img>
            <br></br>
            <img src={PierHanger1} alt='pier'></img>
            <br></br>
            <img src={VeniceNight} alt='venice'></img>
            <br></br>
        </div>
    )

}

export default HomeImages
