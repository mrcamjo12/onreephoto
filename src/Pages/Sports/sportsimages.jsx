// importing sports pictures from photo folder
import DrewLeague1 from './Sports-Photos/DrewLeague1.jpg'
import DrewLeague2 from './Sports-Photos/DrewLeague2.jpg'
import JuventasACMilan01 from './Sports-Photos/JuventusACMilan 01.jpg'
import JuventasACMilan02 from './Sports-Photos/JuventusACMilan 02.jpg'
import JuventasACMilan03 from './Sports-Photos/JuventusACMilan 03.jpg'
import JuventasACMilan04 from './Sports-Photos/JuventusACMilan 04.jpg'
import JuventasACMilan05 from './Sports-Photos/JuventusACMilan 05.jpg'
import LafcLAG01 from './Sports-Photos/lafcLag01.jpg'
import LafcLAG02 from './Sports-Photos/lafcLag02.jpg'
import LafcGoal from './Sports-Photos/lafcLagGoal.jpg'
import LafcGoalie from './Sports-Photos/lafcLagGoalie.jpg'

// I can import more if you want but 11 was a good start to test the speed

const SportsImages = () => {
    return (
        <div className='container'>
           <div className='home-contents'>
             <h1>onree photography</h1>
             <h4>sports photos</h4>
           </div>
           <img src={DrewLeague1} alt='Drew-League-01' className='sports-contents'></img>
           <br></br>
           <img src={DrewLeague2} alt='Drew-League-02' className='sports-contents'></img>
           <br></br>
           <img src={JuventasACMilan01} alt='Juventas-AC-01' className='sports-contents'></img>
           <br></br>
           <img src={JuventasACMilan02} alt='Juventas-AC-02' className='sports-contents'></img>
           <br></br>
           <img src={JuventasACMilan03} alt='Juventas-AC-03' className='sports-contents'></img>
           <br></br>
           <img src={JuventasACMilan04} alt='Juventas-AC-04' className='sports-contents'></img>
           <br></br>
           <img src={JuventasACMilan05} alt='Juventas-AC-04' className='sports-contents'></img>
           <br></br>
           <img src={LafcLAG01} alt='LafcLAG01' className='sports-contents'></img>
           <br></br>
           <img src={LafcLAG02} alt='LafcLAG02' className='sports-contents'></img>
           <br></br>
           <img src={LafcGoal} alt='LafcGoal' className='sports-contents'></img>
           <br></br>
           <img src={LafcGoalie} alt='LafcGoalie' className='sports-contents'></img>
           <br></br>
        </div>
    )

}

export default SportsImages
