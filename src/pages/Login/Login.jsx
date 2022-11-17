import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import './Login.css';

import Logo from '../../assets/logo-a.png'
import Back from '../../assets/leftArrow.png'
import { useState } from 'react';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [entidade, setEntidade] = useState("")

    const notify = (campo, msg, erro = true) => {
        if (erro) {
            toast.error(msg || `preencha o campo ${campo}`)
        } else {
            toast.success(msg)
        }
    }

    let nav = useNavigate();

    const LoginOnClick = e => {
        e.preventDefault();

        if (!email) {
            notify("email")
            return
        }

        if (!senha) {
            notify("senha")
            return
        }

        if (!entidade) {
            notify("entidade")
            return
        }

        axios({
            method: 'get',
            url: "http://localhost:3001/login",
            params: {
                tipo: entidade,
                login: email,
                senha: senha
            }
        }).then(res => {
            if (!res.data) {
                notify(undefined, "Usuário não encontrado")
                return
            }
            notify(undefined, "Logado com sucesso!", false)

            window.sessionStorage.setItem("SID", res.data)

            setTimeout(() => {
                if (entidade === 'personal')
                    nav('/dashboard/personal')
                else
                    nav('/dashboard/aluno')
            }, 1200);


        }).catch(err => {
            notify(undefined, "Usuário não encontrado")
        })

    }

    return (
        <>
            <Toaster />
            <div className='container'>
                <div className="blur login-blur"></div>
                <div className="container-login">
                    <div className="wrap-login">
                        <Link to="/">
                            <img src={Back} alt="" className="login-form-back" />
                        </Link>
                        <form action="" className="login-form">
                            <Link to="/">
                                <span className="login-form-title"><img src={Logo} alt="logo" /></span>
                            </Link>

                            <div className="radio-input">
                                <input type="radio" id="tipo-cadastro_personal" onClick={e => setEntidade("personal")} name="tipo-cadastro" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="tipo-cadastro_personal">Personal</label>

                                <input type="radio" id="tipo-cadastro_aluno" onClick={e => setEntidade("aluno")} name="tipo-cadastro" className="custom-control-input-2" />
                                <label className="custom-control-label" htmlFor="tipo-cadastro_aluno" >Aluno</label>
                            </div>

                            <div className="wrap-input">
                                <input className={email !== "" ? 'has-val input' : 'input'} type="email" name="" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                                <span className="focus-input" data-placeholder='Email'></span>
                            </div>

                            <div className="wrap-input">
                                <input className={senha !== "" ? 'has-val input' : 'input'} type="password" name="" id="password" value={senha} onChange={e => setSenha(e.target.value)} />
                                <span className="focus-input" data-placeholder='Senha'></span>
                            </div>

                            <div className="container-login-form-btn">
                                <button className="login-form-btn" onClick={LoginOnClick}>Login</button>
                            </div>

                            <div className="text-center">
                                <span className="txt1">Não possui conta?</span>
                                <Link to="/cadastro" className="txt2">Criar conta.</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login