import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'


const Clients = () => {
  const {openSidebar} = useGlobalContext()
    return (
    <main className=''>
     <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <h1>Henry Tran Clients</h1>
    </main>
  )
}

export default Clients
