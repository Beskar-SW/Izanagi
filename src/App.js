import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

function App() {

  const urlStatics = 'http://localhost:5000/static/';
  const [entradas, setEntradas] = useState([]);
  const [empanizados, setEmpanizados] = useState([]);

  async function getEntradas() {
    const response = await fetch('http://localhost:5000/Menu/1');
    const data = await response.json();
    return data;
  }

  async function getEmpanizados() {
    const response = await fetch('http://localhost:5000/Menu/2');
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const promise = getEntradas();
    promise.then(data => {
      data.forEach(entrada => {
        setEntradas(entradas => [...entradas, entrada]);
      });
    });

    const promise2 = getEmpanizados();
    promise2.then(data => {
      data.forEach(empanizado => {
        setEmpanizados(empanizados => [...empanizados, empanizado]);
      });
    });
  },[]);

  return (
    <>
      <Header/>
      <Navbar/> 
      <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
        <h1>Menu</h1>
      </div>
      <div id='grid'>
        {entradas.length === 0 ? <h1>Cargando...</h1> : entradas.map(entrada => {
          return (
            <div key={entrada.idProducto} id="areaA">
              <ul>
                <li>
                  <img src={urlStatics + entrada.rutaFoto} alt="" height={"100%"}/>
                </li>
                <li>
                  <h3>{entrada.producto}</h3>
                </li>
                <li>
                  <p>{entrada.descripcion}</p>
                </li>
                <li>
                  <h4>Precio: ${entrada.precio}MXN</h4>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
      <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
        <h1>Empanizados</h1>
      </div>
      <div id='grid'>
        {empanizados.length === 0 ? <h1>Cargando...</h1> : empanizados.map(empanizado => {
          return (
            <div key={empanizado.idProducto} id="areaG">
              <ul>
                <li>
                  <img src={urlStatics + empanizado.rutaFoto} alt="" height={"100%"}/>
                </li>
                <li>
                  <h3>{empanizado.producto}</h3>
                </li>
                <li>
                  <p>{empanizado.descripcion}</p>
                </li>
                <li>
                  <h4>Precio: ${empanizado.precio}MXN</h4>
                </li>
              </ul>
            </div>
          )})
        }
      </div>
    
      <Footer/>
    </>
  );
}

export default App;
