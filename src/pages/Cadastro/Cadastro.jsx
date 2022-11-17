import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select'

import './Cadastro.css';

import Logo from '../../assets/logo-a.png'
import Back from '../../assets/leftArrow.png'

import { useState } from 'react';
import axios from 'axios';

function Cadastro() {
    let nav = useNavigate();

    const notify = (campo, msg, erro = true) => {
        if (erro) {
            toast.error(msg || `preencha o campo ${campo}`)
        } else {
            toast.success(msg)
        }
    }

    const [input, setInput] = useState({
        email: '',
        senha: '',
        verificaSenha: '',
        nome: '',
        sobrenome: '',
        codigoConvite: '',
    });

    const [error, setError] = useState({
        email: '',
        senha: '',
        verificaSenha: '',
        nome: '',
        sobrenome: '',
        codigoConvite: ''
    })

    const [acad, setAcad] = useState([])

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e => {

    }

    useEffect(() => {
        const getAcad = async () => {
            if (acad.length > 0)
                return;

            axios({
                method: 'get',
                url: "http://localhost:3001/academia",
            })
                .then(res => {
                    setAcad(res.data);
                })
        }

        getAcad()
    }, [])

    const divCodigoPersonal = useRef(null)
    const seta = useRef(null)

    const onRadioChange = event => {

        const selecionado = event.target.value

        if (selecionado === "personal") {

            divCodigoPersonal.current.style.display = "block";
            seta.current.style.top = "4.5%"
        } else {

            divCodigoPersonal.current.style.display = "none";
            seta.current.style.top = "6.9%"
        }

    }

    function Cadastrar(e) {
        const cadPersonal = async () => {
            await axios({
                method: 'post',
                url: "http://localhost:3001/cadastro/personal",
                data: {
                    login: input.email,
                    senha: input.senha,
                    codigo: input.codigoConvite
                }
            })
                .then(res => {
                    notify(undefined, "Cadastrado com sucesso!", false);

                    window.sessionStorage.setItem("SID", res.data)

                    setTimeout(() => {
                        nav('/dashboard/personal')
                    }, 1200);
                })
                .catch(err => {
                    notify(undefined, err.response.data);
                })
        }

        const cadAluno = async () => {
            await axios({
                method: 'post',
                url: "http://localhost:3001/cadastro/aluno",
                data: {
                    nome: input.nome,
                    sobrenome: input.sobrenome,
                    login: input.email,
                    senha: input.senha,
                    academia: input.academia,
                    sexo: input.sexo
                }
            })
                .then(res => {
                    notify(undefined, "Cadastrado com sucesso!", false);

                    window.sessionStorage.setItem("SID", res.data)

                    setTimeout(() => {
                        nav('/dashboard/aluno')
                    }, 1200);
                })
                .catch(err => {
                    notify(undefined, err.response.data);
                })
        }

        e.preventDefault();

        if (!ValidarCampos())
            return


        if (input.tipo === "aluno") {
            cadAluno()
        }

        if (input.tipo === "personal") {
            cadPersonal()
        }

       
    }

    function ValidarCampos() {
        if (!input.tipo) {
            notify("entidade")
            return false;
        }

        if (input.tipo === "aluno" && !input.nome) {
            notify("nome")
            return false;
        }

        if (input.tipo === "aluno" && !input.sobrenome) {
            notify("sobrenome")
            return false;
        }

        if (!input.email) {
            notify("email")
            return false
        }

        if (!input.senha) {
            notify("senha")
            return false;
        }

        if (!input.verificaSenha) {
            notify("verifica senha")
            return false;
        }

        if (input.senha !== input.verificaSenha) {
            notify(undefined, "As senhas devem ser iguais.")
            return false;
        }

        if (input.senha.length < 4) {
            notify(undefined, "A senha deve ter mais que 4 caracteres.")
            return false;
        }

        if (input.tipo === "personal" && !input.codigoConvite) {
            notify("código de convite")
            return false;
        }

        if (input.tipo === "aluno" && !input.academia) {
            notify("academia")
            return false;
        }

        if (input.tipo === "aluno" && !input.sexo) {
            notify("sexo")
            return false;
        }


        return true;
    }

    const SelectChange = (selected) => {
        setInput(prev => ({
            ...prev,
            'academia': selected.value
        }));
    }

    return (
        <>
            <Toaster />
            <div className='container'>
                <div className="container-cadastro">
                    <div className="blur cadastro-blur"></div>
                    <div className="wrap-cadastro">
                        <Link to="/">
                            <img src={Back} alt="" className="cadastro-form-back" ref={seta} />
                        </Link>
                        <form action="" className="cadastro-form">
                            <Link to="/">
                                <span className="cadastro-form-title"><img src={Logo} alt="logo" /></span>
                            </Link>

                            <div className="radio-input" onChange={e => {
                                onRadioChange(e)
                                onInputChange(e)
                            }}>
                                <input type="radio" value="personal" name="tipo" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="tipo-cadastro_personal">Personal</label>

                                <input type="radio" value="aluno" name="tipo" className="custom-control-input-2" />
                                <label className="custom-control-label" htmlFor="tipo-cadastro_aluno" >Aluno</label>
                            </div>

                            {
                                input.tipo !== "personal" && (
                                    <div className="wrap-input">
                                        <input required className={input.nome !== "" ? 'has-val input' : 'input'} type="text" name="nome" id="nome" value={input.nome} onChange={onInputChange} onBlur={validateInput} />
                                        <span className="focus-input" data-placeholder='Nome'></span>
                                        {error.nome && <span className='err'>{error.nome}</span>}
                                    </div>
                                )
                            }
                            {
                                input.tipo !== "personal" && (
                                    <div className="wrap-input">
                                        <input required className={input.sobrenome !== "" ? 'has-val input' : 'input'} type="text" name="sobrenome" id="sobrenome" value={input.sobrenome} onChange={onInputChange} onBlur={validateInput} />
                                        <span className="focus-input" data-placeholder='Sobrenome'></span>
                                        {error.sobrenome && <span className='err'>{error.sobrenome}</span>}
                                    </div>
                                )
                            }

                            <div className="wrap-input">
                                <input required className={input.email !== "" ? 'has-val input' : 'input'} type="email" name="email" id="email" value={input.email} onChange={onInputChange} onBlur={validateInput} />
                                <span className="focus-input" data-placeholder='Email'></span>
                                {error.email && <span className='err'>{error.email}</span>}
                            </div>

                            <div className="wrap-input">
                                <input required className={input.senha !== "" ? 'has-val input' : 'input'} type="password" minLength="6" name="senha" id="password" value={input.senha} onChange={onInputChange} onBlur={validateInput} />
                                <span className="focus-input" data-placeholder='Senha'></span>

                            </div>

                            <div className="wrap-input">
                                <input required className={input.verificaSenha !== "" ? 'has-val input' : 'input'} type="password" minLength="6" name="verificaSenha" id="verifypassword" value={input.verificaSenha} onChange={onInputChange} onBlur={validateInput} />
                                <span className="focus-input" data-placeholder='Digite sua senha novamente'></span>

                            </div>
                            <div className="error">
                                {error.senha && <span className='err'>{error.senha}</span>}
                                {error.verificaSenha && <span className='err'>{error.verificaSenha}</span>}
                            </div>

                            <div className="wrap-input personal" id='codigoPersonalDiv' ref={divCodigoPersonal}>
                                <input className={input.codigoConvite !== "" ? 'has-val input' : 'input'} type="text" name="codigoConvite" id="codigoConvite" value={input.codigoConvite} onChange={onInputChange} onBlur={validateInput} />
                                <span className="focus-input" data-placeholder='Código PERSONAL'></span>
                            </div>

                            {
                                input.tipo !== "personal" && (
                                    <div className="wrap-input">
                                        <Select options={acad} onChange={SelectChange} />
                                    </div>
                                )
                            }

                            {
                                input.tipo !== "personal" && (
                                    <div className="radio-input-2" onChange={onInputChange}>
                                        <input required type="radio" id="tipo-cadastro_personal" value="masc" name="sexo" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="tipo-cadastro_personal">Masculino</label>

                                        <input type="radio" id="tipo-cadastro_aluno" value="fem" name="sexo" className="custom-control-input-2" />
                                        <label className="custom-control-label" htmlFor="tipo-cadastro_aluno" >Feminino</label>
                                    </div>
                                )
                            }


                            <div className="container-cadastro-form-btn">
                                <button className="cadastro-form-btn" onClick={Cadastrar}>Cadastrar</button>
                            </div>

                            <div className="text-center">
                                <span className="txt1">Já possuí uma conta?</span>
                                <Link to="/login" className="txt2">Entrar.</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro