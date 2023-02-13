import * as C from './styles'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <C.ContainerFooter>
      <div className="logo-footer">
        <img src={logo} alt="" />
        <p>Milena Melo é uma profissional de cuidados com a pele com serviço completo especializado em design de sobrancelhas (incluindo micropigmentação) e cuidados com a pele premium</p>
      </div>
    </C.ContainerFooter>
  )
}

export default Footer