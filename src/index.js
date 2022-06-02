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
import CreateElement from './Update/CreateElement';
import Ventas from './Ventas/Ventas';
import Pedidos from './Pedidos/Pedidos';

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
      <Route path='/admin/create' element={<CreateElement/>} />
      <Route path='/admin/ventas' element={<Ventas/>}/>
      <Route path='/admin/pedidos' element={<Pedidos/>}/>
    </Routes>
  </BrowserRouter>

);

reportWebVitals();
