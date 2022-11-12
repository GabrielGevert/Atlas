import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './Hero.css';
import hero_image from "../../../assets/hero_image.png";
import hero_image_back from "../../../assets/hero_image_back.png";
import Heart from "../../../assets/heart.png";
import Calories from "../../../assets/calories.png"


const Hero = () => {
  return (
    <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
                <div></div>
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
                    <span>+30</span>
                    <span>Personais capacitados</span>
                </div>
                <div>
                    <span>+931</span>
                    <span>Usuários conosco</span>
                </div>
                <div>
                    <span>+50</span>
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
            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Frequência Cardíaca</span>
                <span>121 bpm</span>
            </div>
                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calorias Eliminidas</span>
                        <span>270 kcal</span>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Hero