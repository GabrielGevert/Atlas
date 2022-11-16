import React, { useRef, useState } from 'react'


import './TreinoAluno.css'
import Logo from '../../assets/logo.png'
import User from '../../assets/user.png'
import UserBlack from '../../assets/user2.png'
import Settings from '../../assets/setting.png'
import Logout from '../../assets/logout.png'
import Tick from '../../assets/tick2.png'
import Printer from '../../assets/printer.png'

const TreinoAluno = () => {

    let user = "Jorge lucas"
    let objetivo = "Malhar pra pegar mulher"
    let restante = "5"

    const testMap = [
        {
            responsavel: "Gabriel Gevert",
            nomeTreino: "Hipertrofia",
            categoria: "Perna",
            exercicios: [
                {
                    exercicioNome: "Abdutor",
                    sequencia: "3 x 12 - 30 segundos",
                },
                {
                    exercicioNome: "Extensor",
                    sequencia: "3 x 12 - 30 segundos",
                },
            ],
            ultimoTreino: "17:30 - 14/11/22"

        },
        {
            responsavel: "Gabriel Gevert",
            nomeTreino: "Hipertrofia",
            categoria: "Peito - Biceps",
            exercicios: [
                {
                    exercicioNome: "Supino",
                    sequencia: "3 x 12 - 30 segundos",
                },
                {
                    exercicioNome: "Desenv Halter",
                    sequencia: "3 x 12 - 30 segundos",
                },
            ],
            ultimoTreino: "17:52 - 15/11/22"
        },
    ];

    const marcarTreinoButton = useRef(null)

    const [active, setActive] = useState(false);

    const marcarTreino = e => {

        setActive(!active);
        
    }

    function abrirMenu() {
        console.log("abrirmenu")
        document.getElementById("subMenu").classList.toggle("open-menu")
    }

    return (

        <div className='container-treino'>
            <div className="header-treino">
                <nav>
                    <img src={Logo} alt="" className='logo' />
                    <img src={User} alt="" className='user' onClick={abrirMenu} />

                    <div className="sub-menu-wrap" id='subMenu'>
                        <div className="sub-menu">
                            <div className="user-info">
                                <img src={UserBlack} alt="" />
                                <h2>{user}</h2>
                            </div>
                            <hr></hr>

                            <a href="#" className='sub-menu-link'>
                                <img src={Settings} alt="" />
                                <p>Editar perfil</p>
                                <span>></span>
                            </a>
                            <a href="#" className='sub-menu-link'>
                                <img src={Logout} alt="" />
                                <p>Sair</p>
                                <span>></span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='first-content'>
                <h1>{user}</h1>
                <hr></hr>
                <div className='first-content-text'>
                    <span>Objetivo do aluno:</span>
                    <span>{objetivo}</span>
                    <span>Semanas restantes:</span>
                    <span>{restante}</span>
                </div>
            </div>
            <div className='treinos'>
                {testMap.map((treinos, i) => (
                    <div className="card-treinos" key={i}>
                        <button onClick={marcarTreino} value={i} className={active ? 'button-ok set-green' : 'button-ok'}>
                            <img src={Tick} alt="" />
                            <span>{active ? "Treino feito" : "Marcar treino"}</span>
                        </button>
                        <button className='button-ok imprime'>
                            <img src={Printer} alt="" />
                            <span>Imprimir</span>
                        </button>
                        <div className='card-treinos-first-text'>
                            <span>Responsável pelo treino:</span><span>{treinos.responsavel}</span>
                        </div>
                        <div className='card-treinos-first-text mt'>
                            <span>Nome do treino:</span><span>{treinos.nomeTreino}</span>
                        </div>
                        <div className='card-treinos-first-text mt'>
                            <span>Categoria:</span><span>{treinos.categoria}</span>
                        </div>
                        <div className='span-before-ex'>
                            <span>exercícios</span>
                        </div>
                            {treinos.exercicios.map((exercicio, i) => (
                                <div className="exercicios" key={i}>
                                    <span className='exercicios-titulo'>{exercicio.exercicioNome}</span>
                                    <span className='exercicios-subtitulo'>{exercicio.sequencia}</span>
                                    <hr></hr>
                                </div> 
                            ))}
                            <div className='last-ex'>
                                <span>Último treino: </span>
                                <span>{treinos.ultimoTreino}</span>
                            </div>
                    </div>
                ))}
            </div>
        </div>
        

    )
}

export default TreinoAluno