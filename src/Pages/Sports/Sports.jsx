import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import SportsImages from '../Sports/sportsimages'

const Sports = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <main>

          <button className='sidebar-toggle' onClick={openSidebar}>
            <FaBars />
           </button>
           <SportsImages />
          

    </main>
  )
}

export default Sports