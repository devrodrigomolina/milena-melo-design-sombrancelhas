import * as C from './style'
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <C.ContainerSociais>
      <Link to="facebook.com" target="_blank">
        <FaFacebookF className='icon'/>
      </Link>
      <Link to="wa.me" target="_blank">
        <FaWhatsapp className='icon'/>
      </Link>
      <Link to="instagram.com" target="_blank">
        <FaInstagram className='icon'/>
      </Link>
    </C.ContainerSociais>
  )
}

export default Socials