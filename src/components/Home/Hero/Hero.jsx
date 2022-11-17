import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './Hero.css';
import hero_image from "../../../assets/hero_image.png";
import hero_image_back from "../../../assets/hero_image_back.png";
import Heart from "../../../assets/heart.png";
import Calories from "../../../assets/calories.png";
import NumberCounter from 'number-counter';

import User from '../../../assets/user.png'
import UserBlack from '../../../assets/user2.png'
import Halter from '../../../assets/haltere.png'
import Settings from '../../../assets/setting.png'
import Logout from '../../../assets/logout.png'

import { motion } from 'framer-motion';

const Hero = () => {

    function abrirMenu() {
        console.log("abrirmenu")
        document.getElementById("subMenu").classList.toggle("open-menu")
    }

    const transition = { type: 'spring', duration: 3 }
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: '380px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>A melhor rede de academias do estado do Paraná</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span>Deixe seu </span>
                        <span className='stroke-text'>Shape</span>
                    </div>
                    <div>
                        <span>Falar por você</span>
                    </div>
                    <div>
                        <span>
                            Aqui vamos te ajudar a moldar e construir seu corpo ideal
                            para viver sua vida ao máximo
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span><NumberCounter end={30} start={0} delay='3' preFix="+"></NumberCounter></span>
                        <span>Personais capacitados</span>
                    </div>
                    <div>
                        <span><NumberCounter end={931} start={800} delay='3' preFix="+"></NumberCounter></span>
                        <span>Usuários conosco</span>
                    </div>
                    <div>
                        <span><NumberCounter end={53} start={12} delay='3' preFix="+"></NumberCounter></span>
                        <span>Programas de treinamento</span>
                    </div>
                </div>
                <div className="hero-buttons">

                    <button className="btn">Comece agora</button>
                    <button className="btn">Saiba mais</button>
                </div>
            </div>
            <div className="right-h">
                <Link to="/login" className="btn">Entrar</Link>
                <div className="go-dashboard">
                    <img onClick={abrirMenu} src={User} alt="" className='user' />
                    <div className="sub-menu-wrap" id='subMenu'>
                        <div className="sub-menu">
                            <div className="user-info">
                                <img src={UserBlack} alt="" />
                                <h2>Nome</h2>
                            </div>
                            <hr></hr>

                            <a href="/dashboard/aluno" className='sub-menu-link'>
                                <img src={Halter} alt="" />
                                <p>Ver meus treinos</p>

                            </a>

                            <a href="#" className='sub-menu-link'>
                                <img src={Settings} alt="" />
                                <p>Editar perfil</p>

                            </a>
                            <a href="#" className='sub-menu-link'>
                                <img src={Logout} alt="" />
                                <p>Sair</p>

                            </a>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Frequência Cardíaca</span>
                    <span>121 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '25rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back" />
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "32rem" }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calorias Eliminidas</span>
                        <span>270 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero