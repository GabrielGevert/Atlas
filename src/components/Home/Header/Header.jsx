import React from 'react'
import { Link } from "react-scroll"
import './Header.css'
import Logo from '../../../assets/logo.png'

function Header() {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
            <li><Link to='home'
                      spy={true}
                      smooth={true}>Início</Link></li>
            <li><Link to='programs'
                      spy={true}
                      smooth={true}>Programas</Link></li>
            <li><Link to='reasons'
                      spy={true}
                      smooth={true}>Por que nós?</Link></li>
            <li><Link to='planos'
                      spy="true"
                      smooth={true}>Planos</Link></li>
        </ul>
    </div>
  )
}

export default Header