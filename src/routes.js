import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import SobreEmpresa from './Pages/SobreEmpresa';
import Contato from './Pages/Contato';

function Theroutes(){
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path="/" exact element={<Main/>} />
                <Route path="/sobre-empresa" element={<SobreEmpresa/>} />
                <Route path="/contato" element={<Contato/>} />
                
            </Routes>        
        </BrowserRouter>
    );
};
export default Theroutes;