import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Layout from './layout';
import JoinForm from './joinForm';
import './css/app.css';
import {Routes , Route , BrowserRouter } from "react-router-dom";

function App() {

   

    return (
        <BrowserRouter>
            <div className='center'>
            <Routes>
                {/* 처음 진입 페이지 */}
                <Route path='/' element={<Layout />}></Route>
                {/* 회원가입 폼 */}
                <Route path='/joinForm' element={<JoinForm />}></Route>
            </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;