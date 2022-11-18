import React, { useState, useRef, useEffect } from 'react'



import './DashboardPersonal.css'
import Logo from '../../assets/logo.png'
import User from '../../assets/user.png'
import UserBlack from '../../assets/user2.png'
import Settings from '../../assets/setting.png'
import Logout from '../../assets/logout.png'
import Edit from '../../assets/edit.png'
import Lixeira from '../../assets/lixeira.png'
import Plus from '../../assets/plus.png'
import Save from '../../assets/diskette.png'
<<<<<<< HEAD
import Select from 'react-select'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
=======
import LixeiraRed from '../../assets/lixeirared.png'

import { createElement } from 'react'

>>>>>>> 8ab0b408f77ca1c7cdaccb15f6f4b184181d46cc

const DashboardPersonal = () => {
    let nav = useNavigate();

    const [lista, setLista] = useState([]);

    function marcarTreino(i) {

        var listaAux = [...lista];

        listaAux[i].finalizado = !listaAux[i].finalizado

        setLista(listaAux)
    }

    const testInput = useRef(null)

    function abrirMenu() {
        document.getElementById("subMenu").classList.toggle("open-menu")
    }

    let contadorIdCard = 1

    const addCardTreino = () => {

        // contador id do card
        contadorIdCard = contadorIdCard + 1

        // criando card
        var newCard = document.createElement("div")
        newCard.classList.add('card-treinos')
        newCard.id = ("addTreino-" + contadorIdCard)

        // first span card X
        var newCardFirstSpan = document.createElement("span")
        newCardFirstSpan.appendChild(document.createTextNode("x"))
        newCardFirstSpan.classList.add('excluir-exercicio', 'right-span')
        newCardFirstSpan.addEventListener('click', excluirCard)
        // div for first span 

        var newCardFirstText0 = document.createElement("div")
        newCardFirstText0.classList.add('card-treinos-first-text-space', 'mt')

        // criando primeiro span - responsavel
        var newCardSpan1 = document.createElement("span")
        newCardSpan1.appendChild(document.createTextNode("Responsável pelo treino:"))

        // criando segundo span para o responsável -> recebe usuario logado

        var newCardSpan2 = document.createElement("span")
        newCardSpan2.appendChild(document.createTextNode("Usuário logado"))

        // criando primeira div para nome do treino

        newCardFirstText0.append(newCardSpan1, newCardSpan2)

        var newCardFirstText = document.createElement("div")
        newCardFirstText.classList.add('card-treinos-first-text-space', 'mt')
        // criando primeiro span div para nome do treino

        var newCardFirstTextSpan = document.createElement("span")
        newCardFirstTextSpan.appendChild(document.createTextNode("Nome do treino:"))

        // criando segundo span div para nome do treino
        var newCardFirstTextSpan2 = document.createElement("span")

        // input que recebe o nome do treino
        var newCardFirstTextSpan2Input = document.createElement("input")
        newCardFirstTextSpan2Input.classList.add('input-align')
        newCardFirstTextSpan2Input.id = ('nomeTreinoExercicio-' + contadorIdCard)


        newCardFirstTextSpan2.appendChild(newCardFirstTextSpan2Input)

        // adicionando span e input na div
        newCardFirstText.append(newCardFirstTextSpan, newCardFirstTextSpan2)

        // criando segunda div para categoria do treino

        var newCardSecondText = document.createElement("div")
        newCardSecondText.classList.add('card-treinos-first-text-space', 'mt')

        // criando primeiro span div para categoria do treino
        var newCardSecondTextSpan = document.createElement("span")
        newCardSecondTextSpan.appendChild(document.createTextNode("Categoria:"))

        // criando segundo span div para categoria do treino
        var newCardSecondTextSpan2 = document.createElement("span")

        // input que recebe a categoria do treino

        var newCardSecondTextSpan2Input = document.createElement("input")
        newCardSecondTextSpan2Input.classList.add('input-align')
        newCardSecondTextSpan2Input.id = ('categoriaTreinoExercicio-' + contadorIdCard)

        newCardSecondTextSpan2.appendChild(newCardSecondTextSpan2Input)

        // adicionando span e input na div da categoria do treino

        newCardSecondText.append(newCardSecondTextSpan, newCardSecondTextSpan2)

        // criando div escrita EXERCICIOS antes dos exercicios

        var newCardExerciseText = document.createElement("div")
        newCardExerciseText.classList.add('span-before-ex')

        // criar span para div escrita EXERCICIOS

        var newCardExerciseTestSpan = document.createElement("span")
        newCardExerciseTestSpan.appendChild(document.createTextNode("Exercicios"))

        // adicionando span na div

        newCardExerciseText.append(newCardExerciseTestSpan)

        // adicionando div para adicionar exercicios
        var newCardNewExercise = document.createElement("div")
        newCardNewExercise.classList.add('adicionando-exercicios')
        newCardNewExercise.id = ("addDivExercicio-" + contadorIdCard)

        // criar div que vai receber primeira parte do exercicio

        var newCardNewExerciseFirst = document.createElement("div")
        newCardNewExerciseFirst.classList.add('exercicios')
        newCardNewExerciseFirst.id = ("exercicio-" + contadorIdCard)

        // adicionar span da primeira parte do exercicio
        var newCardNewExerciseFirstSpanX = document.createElement("span")
        newCardNewExerciseFirstSpanX.appendChild(document.createTextNode("x"))
        newCardNewExerciseFirstSpanX.title = "Excluir este exercicio"
        newCardNewExerciseFirstSpanX.id = ("excluirTreinoExercicio-" + contadorIdCard)
        newCardNewExerciseFirstSpanX.classList.add('excluir-exercicio')
        newCardNewExerciseFirstSpanX.addEventListener('click', excluirExercicio)


        // Adicionar div que recebe primeira parte do exercicio na div para adicionar exercicios


        // criando div depois do X

        var newCardNewExerciseFirstExercise = document.createElement("div")
        newCardNewExerciseFirstExercise.classList.add('first-exercicio')

        // criando input pro primeiro exercicio

        var newCardNewExerciseFirstExerciseInput = document.createElement('input')
        newCardNewExerciseFirstExerciseInput.classList.add('exercicios-titulo-input')
        newCardNewExerciseFirstExerciseInput.placeholder = "Série"
        newCardNewExerciseFirstExerciseInput.id = ("serieTreinoExercicio-" + contadorIdCard)


        // criando div segunda parte pro exercicio

        var newCardNewExerciseFirstExerciseSecond = document.createElement("div")
        newCardNewExerciseFirstExerciseSecond.classList.add('second-exercicio')

        // adicionando inputs segunda parte exercicio

        var newCardNewExerciseFirstExerciseSecondInput1 = document.createElement("input")
        newCardNewExerciseFirstExerciseSecondInput1.id = ("serieTreinoExercicio-" + contadorIdCard)
        newCardNewExerciseFirstExerciseSecondInput1.placeholder = "Série"
        newCardNewExerciseFirstExerciseSecondInput1.classList.add('exercicios-subtitulo-input')

        var newCardNewExerciseFirstExerciseSecondInput2 = document.createElement("input")
        newCardNewExerciseFirstExerciseSecondInput2.id = ("descansoTreinoExercicio-" + contadorIdCard)
        newCardNewExerciseFirstExerciseSecondInput2.placeholder = "Tempo de descanso"
        newCardNewExerciseFirstExerciseSecondInput2.classList.add('exercicios-subtitulo-input')

        // adicionando inputs na segunda div
        newCardNewExerciseFirstExerciseSecond.append(newCardNewExerciseFirstExerciseSecondInput1, newCardNewExerciseFirstExerciseSecondInput2)

        //adicionando botoes final card

        var newCardButtonAddExercise = document.createElement("button")
        newCardButtonAddExercise.classList.add('button-add-label')
        newCardButtonAddExercise.appendChild(document.createTextNode("Adicionar + 1 Exercicío"))
        newCardButtonAddExercise.addEventListener('click', addTreinoLabel)


        var newCardButtonSave = document.createElement("button")
        newCardButtonSave.classList.add('button-edit', 'save')

        var newCardButtonSaveImg = document.createElement("img")
<<<<<<< HEAD
        newCardButtonSaveImg.src = ({ Save })
=======
        let imagemSave = {Save}
        newCardButtonSaveImg.src = imagemSave
>>>>>>> 8ab0b408f77ca1c7cdaccb15f6f4b184181d46cc

        var newCardButtonSaveSpan = document.createElement("span")
        newCardButtonSaveSpan.appendChild(document.createTextNode("Salvar treino"))

        newCardButtonSave.append(newCardButtonSaveImg, newCardButtonSaveSpan)
        // adicionando todas as divs para o card criado

        newCardNewExerciseFirstExercise.append(newCardNewExerciseFirstExerciseInput)
        // div exercicio
        newCardNewExerciseFirst.append(newCardNewExerciseFirstSpanX, newCardNewExerciseFirstExercise, newCardNewExerciseFirstExerciseSecond)

        //
        newCardNewExercise.append(newCardNewExerciseFirst)

        newCard.append(newCardFirstSpan, newCardFirstText0, newCardFirstText, newCardSecondText, newCardExerciseText, newCardNewExercise, newCardButtonAddExercise, newCardButtonSave)

        // Inserir a div no código
        var inserirCard = document.getElementById("addCard-1")

        inserirCard.appendChild(newCard)
    }

    let contadorIdAddLabel = 1

    const addTreinoLabel = () => {

        // contador para o id 

        contadorIdAddLabel = contadorIdAddLabel + 1

        // Criando elementos
        var newExercise = document.createElement("div");
        newExercise.classList.add('exercicios')
        newExercise.id = ("exercicio-" + contadorIdAddLabel)

        var newExerciseContentSpan = document.createElement("span")
        newExerciseContentSpan.appendChild(document.createTextNode("x"))
        newExerciseContentSpan.classList.add('excluir-exercicio')
        newExerciseContentSpan.title = "Excluir este exercicio"
        newExerciseContentSpan.id = "excluirTreinoExercicio-" + contadorIdAddLabel
        newExerciseContentSpan.addEventListener('click', excluirExercicio)

        var newExerciseContent = document.createElement("div")
        newExerciseContent.classList.add('first-exercicio')

        var newExerciseSecondContent = document.createElement("div")
        newExerciseSecondContent.classList.add('second-exercicio')

        var newExerciseContentInput = document.createElement('input')
        newExerciseContentInput.placeholder = "Exercicio"
        newExerciseContentInput.id = "exercicioTreinoExercicio-" + contadorIdAddLabel
        newExerciseContentInput.classList.add('exercicios-titulo-input')

        var newExerciseSecondContentInput = document.createElement('input')
        newExerciseSecondContentInput.placeholder = "Série"
        newExerciseSecondContentInput.id = "serieTreinoExercicio-" + contadorIdAddLabel
        newExerciseSecondContentInput.classList.add('exercicios-subtitulo-input')

        var newExerciseSecondContentInputTwo = document.createElement('input')
        newExerciseSecondContentInputTwo.placeholder = "Tempo de descanso"
        newExerciseSecondContentInputTwo.id = "descansoTreinoExercicio-" + contadorIdAddLabel
        newExerciseSecondContentInputTwo.classList.add('exercicios-subtitulo-input')

        // Inserindo elementos na div criada pelos elementos
        newExerciseContent.append(newExerciseContentSpan, newExerciseContentInput)
        newExerciseSecondContent.append(newExerciseSecondContentInput, newExerciseSecondContentInputTwo)

        newExercise.append(newExerciseContent, newExerciseSecondContent)

        // Inserir a div no código
        var inserirDiv = document.getElementById("addDivExercicio-1")

        inserirDiv.appendChild(newExercise)
    }

    function excluirCard() {

        var card = document.getElementById("addTreino-" + contadorIdCard)

        card.parentNode.removeChild(card)

        if (contadorIdCard > 0) {
            contadorIdCard = contadorIdCard - 1
        }

    }

    function excluirExercicio() {
        var exercicio = document.getElementById("exercicio-" + contadorIdAddLabel)

        console.log(contadorIdAddLabel)
        exercicio.parentNode.removeChild(exercicio)

        if (contadorIdAddLabel > 0) {
            contadorIdAddLabel = contadorIdAddLabel - 1
        }

    }
    const [alunos, setAlunos] = useState([]);
    const [aluno, setAluno] = useState(null);

    const SelectChange = (selected) => {
        const GetTreinos = async () => {
            axios({
                method: 'get',
                url: "http://localhost:3001/treinos",
                params: {
                    sid: selected.value
                }
            })
                .then(res => {
                    setLista(res.data);
                }).catch(err => {
                    nav("/")
                })
        }

        const GetUser = async () => {
            await axios({
                method: 'get',
                url: "http://localhost:3001/user",
                params: {
                    sid: selected.value
                }
            })
                .then(res => {
                    setAluno(res.data)
                })
        }

        GetTreinos()
        GetUser()
    }


    const [user, setUser] = useState(null);
    useEffect(() => {
        var sid = window.sessionStorage.getItem("SID")
        if (!sid) {
            nav("/")
            return
        }

        const GetUser = async () => {
            await axios({
                method: 'get',
                url: "http://localhost:3001/user",
                params: {
                    sid
                }
            })
                .then(res => {
                    console.log(res.data);
                    if(res.data.tipo !== 'personal'){
                        nav('/')
                        return
                    }
                    setUser(res.data)
                })
        }

        if (!!user) return;
        GetUser()

        const getalunos = async () => {
            await axios({
                method: 'get',
                url: "http://localhost:3001/usuarios",
            })
                .then(res => {
                    setAlunos(res.data)
                })
                .catch(err => {
                    notify(undefined, err.response.data);
                })
        }


        if (alunos.length === 0) {
            getalunos()
        }


    }, [])


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
                                <h2>{user && user.nome}</h2>
                            </div>
                            <hr></hr>

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
                </nav>
            </div>
            <div className='first-content-personal'>
                <div className='first-content-personal-text'>
                    <h1 className='orange'>{user && user.nome}</h1>
                    <hr></hr>
                    <div className='first-content-personal-first-text'>
                        <span>Academia:</span>
                        <span>{aluno && aluno.rs[0].nome}</span>
                    </div>
                </div>
                <div className="first-content-search">
                    <span>Selecione um cliente:</span>
                    <Select options={alunos} onChange={SelectChange} />
                </div>
            </div>
            <div className="treinos" id="addCard-1">
                {console.log(lista)}
                {lista.map((treino, i) => (
                    <div className="card-treinos" id={"card-treino-" + i} key={i}>
                        <button className="button-edit">
                            <img src={Edit} alt="" />
                            <span>Editar treino</span>
                        </button>
                        <button className='button-edit exclude'>
                            <img src={Lixeira} alt="" />
                            <span>Excluir treino</span>
                        </button>
                        <div className='card-treinos-first-text'>
                            <span>Responsável pelo treino:</span><span>{treino.responsavel}</span>
                        </div>
                        <div className='card-treinos-first-text mt'>
                            <span>Nome do treino:</span><span>{treino.nomeTreino}</span>
                        </div>
                        <div className='card-treinos-first-text mt'>
                            <span>Categoria:</span><span>{treino.categoria}</span>
                        </div>
                        <div className='span-before-ex'>
                            <span>exercícios</span>
                        </div>
                        {treino.exercicios.map((exercicio, i) => (
                            <div className="exercicios" key={i}>
                                <span className='exercicios-titulo'>{exercicio.exercicioNome}</span>
                                <span className='exercicios-subtitulo'>{exercicio.sequencia}</span>
                                <hr></hr>
                            </div>
                        ))}
                        <div className='last-ex'>
                            <span>Último treino: </span>
                            <span>{treino.ultimoTreino}</span>
                        </div>
                    </div>
                ))}
                <div className='card-treinos' id='addTreino-1'>
                    <span onClick={excluirCard} title='Excluir esse card' className='excluir-exercicio right-span'>x</span>
                    <div className='card-treinos-first-text'>
                        <span>Responsável pelo treino:</span><span>Usuário logado</span>
                    </div>
                    <div className='card-treinos-first-text-space mt'>
                        <span>Nome do treino:</span>
                        <span><input id='nomeTreinoExercicio-1' className='input-align' type="text" /></span>
                    </div>
                    <div className='card-treinos-first-text-space mt'>
                        <span>Categoria:</span>
                        <span><input id='categoriaTreinoExercicio-1' className='input-align' type="text" /></span>
                    </div>
                    <div className='span-before-ex'>
                        <span>exercícios</span>
                    </div>
                    <div className="adicionando-exercicios" id="addDivExercicio-1">
                        <div className="exercicios" id='exercicio-1'>
                            <span onClick={excluirExercicio} title="Excluir este exercicio" id="excluirTreinoExercicio-1" className='excluir-exercicio'>x</span>
                            <div className="first-exercicio">
                                <input id='exercicioTreinoExercicio-1' placeholder='Exercicio' className='exercicios-titulo-input'></input>
                            </div>
                            <div className='second-exercicio'>
                                <input id='serieTreinoExercicio-1' placeholder='Série' className='exercicios-subtitulo-input'></input>
                                <input id='descansoTreinoExercicio-1' placeholder='Tempo de descanso' className='exercicios-subtitulo-input'></input>
                            </div>
                        </div>
                    </div>
                    <button onClick={addTreinoLabel} className='button-add-label'>Adicionar + 1 Exercicío</button>
                    <button className="button-edit save">
                        <img src={Save} alt="" />
                        <span>Salvar treino</span>
                    </button>
                </div>
            </div>
            <div onClick={addCardTreino} className='add-exercise'>
                    <span>Adicionar treino</span>
                    <img  className='plus-icon' src={Plus} alt="" />
                </div>
        </div>


    )
}

export default DashboardPersonal