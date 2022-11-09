import React from 'react'
import { Link } from 'react-router-dom'

import './Cadastro.css';

import Logo from '../../assets/logo-a.png'
import Back from '../../assets/leftArrow.png'

import { useState } from 'react';

function Cadastro() {

    // const [email, setEmail] = useState("")
    // const [senha, setSenha] = useState("")
    // const [verificaSenha, setVerificasenha] = useState("")
    // const [nome, setNome] = useState("")
    // const [sobrenome, setSobrenome] = useState("")

    const [input, setInput] = useState({
        email: '',
        senha: '',
        verificaSenha: '',
        nome: '',
        sobrenome: ''
    });

    const [error, setError] = useState({
        email: '',
        senha: '',
        verificaSenha: '',
        nome: '',
        sobrenome: ''
    })

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {

                case "senha":

                    // if (value.length < 6) {
                    //     stateObj[name] = "Senha deve ter no minimo 6 caracteres";
                    // }

                    if (input.verificaSenha && value !== input.verificaSenha) {
                        stateObj["verificaSenha"] = "As senhas não conferem!";
                    } else {
                        stateObj["verificaSenha"] = input.verificaSenha ? "" : error.verificaSenha;
                    }
                    break;

                case "verificaSenha":
                    
                     if (input.senha && value !== input.password) {
                        stateObj[name] = "As senhas não conferem!";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }

    return (
        <div className='container'>
            <div className="container-cadastro">
                <div className="wrap-cadastro">
                    <Link to="/">
                        <img src={Back} alt="" className="cadastro-form-back" />
                    </Link>
                    <form action="" className="cadastro-form">
                        <Link to="/">
                            <span className="cadastro-form-title"><img src={Logo} alt="logo" /></span>
                        </Link>

                        <div className="radio-input">
                            <input required type="radio" id="tipo-cadastro_personal" value="0" name="tipo-cadastro" class="custom-control-input" />
                            <label class="custom-control-label" for="tipo-cadastro_personal">Personal</label>

                            <input type="radio" id="tipo-cadastro_aluno" value="0" name="tipo-cadastro" class="custom-control-input-2" />
                            <label class="custom-control-label" for="tipo-cadastro_aluno" >Aluno</label>
                        </div>

                        <div className="wrap-input">
                            <input required className={input.nome !== "" ? 'has-val input' : 'input'} type="text" name="nome" id="nome" value={input.nome} onChange={onInputChange} onBlur={validateInput} />
                            <span className="focus-input" data-placeholder='Nome'></span>
                            {error.nome && <span className='err'>{error.nome}</span>}
                        </div>

                        <div className="wrap-input">
                            <input required className={input.sobrenome !== "" ? 'has-val input' : 'input'} type="text" name="sobrenome" id="sobrenome" value={input.sobrenome} onChange={onInputChange} onBlur={validateInput} />
                            <span className="focus-input" data-placeholder='Sobrenome'></span>
                            {error.sobrenome && <span className='err'>{error.sobrenome}</span>}
                        </div>

                        <div className="wrap-input">
                            <input required className={input.email !== "" ? 'has-val input' : 'input'} type="email" name="email" id="email" value={input.email} onChange={onInputChange} onBlur={validateInput} />
                            <span className="focus-input" data-placeholder='Email'></span>
                            {error.email && <span className='err'>{error.email}</span>}
                        </div>

                        <div className="wrap-input">
                            <input required className={input.senha !== "" ? 'has-val input' : 'input'} type="password" minlength="6" name="senha" id="password" value={input.senha} onChange={onInputChange} onBlur={validateInput} />
                            <span className="focus-input" data-placeholder='Senha'></span>
                            
                        </div>

                        <div className="wrap-input">
                            <input required className={input.verificaSenha !== "" ? 'has-val input' : 'input'} type="password" minlength="6" name="verificaSenha" id="verifypassword" value={input.verificaSenha} onChange={onInputChange} onBlur={validateInput} />
                            <span className="focus-input" data-placeholder='Digite sua senha novamente'></span>
                            
                        </div>
                        <div className="error">
                            {error.senha && <span className='err'>{error.senha}</span>}
                            {error.verificaSenha && <span className='err'>{error.verificaSenha}</span>}
                        </div>
                        

                        <div className="radio-input-2">
                            <input required type="radio" id="tipo-cadastro_personal" value="0" name="sexo-cadastro" class="custom-control-input" />
                            <label class="custom-control-label" for="tipo-cadastro_personal">Masculino</label>

                            <input type="radio" id="tipo-cadastro_aluno" value="0" name="sexo-cadastro" class="custom-control-input-2" />
                            <label class="custom-control-label" for="tipo-cadastro_aluno" >Feminino</label>
                        </div>

                        <div className="container-cadastro-form-btn">
                            <button className="cadastro-form-btn">Cadastrar</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Já possuí uma conta?</span>
                            <Link to="/login" className="txt2">Entrar.</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro