import React from 'react'
import { plansData } from '../../../data/plansData'
import whiteTick from '../../../assets/whiteTick.png'

import './Plans.css'

function Plans() {
    return (
        <div className="plans-container">
            <div className="programs-header">
                <span className='stroke-text'>preparado para</span>
                <span>começar sua jornada</span>
                <span className='stroke-text'>com a gente</span>
            </div>

            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>R$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>Veja mais beneficios -></span>
                        </div>
                        <button className="btn">Comece agora</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans