import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';


export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
            </Routes>
        </BrowserRouter>
    );
}