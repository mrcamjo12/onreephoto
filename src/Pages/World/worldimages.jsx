import airplane from './World-Photos/airplane.jpg'
import hoop from './World-Photos/hoop.jpg'
import pierhenge1 from './World-Photos/pierhenge1.jpg'
import venicenight from './World-Photos/venicenight.jpg'


const WorldImages = () => {
       return (
        <div className='container'>
           <div className='hc hc1'>
            <h3>world</h3>
           </div> 
            <img src={airplane} alt='airplane' className='hc hc2'></img>
            <br></br>
            <img src={hoop} alt='airplane' className='hc hc2'></img>
            <br></br>
            <img src={pierhenge1} alt='airplane' className='hc hc2'></img>
            <br></br>
            <img src={venicenight} alt='airplane' className='hc hc2'></img>
            <br></br>
           </div>
    )
}

export default WorldImages
