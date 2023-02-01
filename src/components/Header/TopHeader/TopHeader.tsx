import React from 'react'
import * as C from './styles'
import logo from '../../../assets/logo.png'

const TopHeader = () => {
  return (
    <C.ContainerTopHeader>
      <img className="logo" src={logo} alt="Logotipo" />
      <div className="adress">
        <p><b>Rua</b>: Senior de taubaté, Taubaté - SP, 157</p>
        <p className='phone'>(44) 99999-9999</p>
      </div>
     
    </C.ContainerTopHeader>
  )
}

export default TopHeader