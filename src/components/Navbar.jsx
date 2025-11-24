import dayjs from 'dayjs'
import { navLinks } from '#constants'
import { navIcons } from '../constants'

const Navbar = () => {
  return (
    
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo" />
            <p className='font-bold'>Ganesh's Portfolio</p>


            <ul>
                {navLinks.map(({name,id})=>(
                    <li key={id}><p>{name}</p></li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(({id,img})=>(
                    <li key={id}>
                        <img src={img} alt={`icon-${id}`} className='icon-hover'/>
                    </li>
                ))}
            </ul>

            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
  )
} 

export default Navbar