import React from 'react'

import './Login.css';

import Logo from '../../assets/logo-a.png'
import { useState } from 'react';

function Home() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <div className='container'>
            <div className="container-login">
                <div className="wrap-login">
                    <form action="" className="login-form">
                        <span className="login-form-title">
                            <img src={Logo} alt="logo" />
                        </span>

                        <div className="radio-input">
                            <input type="radio" id="tipo-cadastro_personal" value="0" name="tipo-cadastro" class="custom-control-input" />
                            <label class="custom-control-label" for="tipo-cadastro_personal">Personal</label>

                            <input type="radio" id="tipo-cadastro_aluno" value="0" name="tipo-cadastro" class="custom-control-input " />
                            <label class="custom-control-label" for="tipo-cadastro_aluno" >Aluno</label>
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
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta?</span>
                            <a href="#" className="txt2">Criar conta.</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home