import React from 'react';
import "./App.css";
import SignIn from './signin'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './signup';
import Main from './main';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<SignIn/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/main' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
