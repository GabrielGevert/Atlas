import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import TreinoAluno from './pages/TreinoAluno/TreinoAluno';
import DashboardPersonal from './pages/DashboardPersonal/DashboardPersonal';


export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="/dashboard/aluno" element={<TreinoAluno/>}></Route>
                <Route path="/dashboard/personal" element={<DashboardPersonal/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}