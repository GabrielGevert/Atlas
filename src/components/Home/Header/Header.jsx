import React from 'react'
import './Header.css'
import Logo from '../../../assets/logo.png'

function Header() {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
            <li>Início</li>
            <li>Programas</li>
            <li>Por que nós?</li>
            <li>Planos</li>
        </ul>
    </div>
  )
}

export default Header