import React from 'react'
import './Reasons.css'

import image1 from '../../../assets/image1.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'
import image4 from '../../../assets/image4.png'
import nb from '../../../assets/nb.png'
import adidas from '../../../assets/adidas.png'
import nike from '../../../assets/nike.png'
import tick from '../../../assets/tick.png'

function Reasons() {
    return (
        <div className="Reasons" id='reasons'>
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>Alguns motivos</span>
                <div>
                    <span className='stroke-text'>Por que</span>
                    <span> nos escolher?</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>mais de 30 personais capacitados</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>treinar mais inteligente e mais rápido do que antes</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>escolha o plano ideal pra você</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>parceiros confiáveis</span>
                    </div>
                </div>
                <span style={{
                    color: 'var(--gray)', 
                    fontWeight: "normal"
                }}>NOSSOS PARCEIROS</span>

                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={nike} alt="" />
                    <img src={adidas} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons