import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/log' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;