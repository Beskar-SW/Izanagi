import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dudas from './Dudas';
import Acercade from './Acercade';
import Admin from './Admin';
import reportWebVitals from './reportWebVitals';
import MenuUpdate from './MenuUpdate';
import UpdateElement from './Update/UpdateElement';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/dudas' element={<Dudas/>}/>
      <Route path='/acercade' element={<Acercade/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin/menu' element={<MenuUpdate/>}/>
      <Route path='/admin/menu/:id' element={<UpdateElement/>}/>
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
