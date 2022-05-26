import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

function App() {

  const urlStatics = 'http://localhost:3000/static/';
  const [entradas, setEntradas] = useState([]);
  const [empanizados, setEmpanizados] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/Menu/1').then(res => res.json()).then(data => {
      setEntradas(data);
    });
    fetch('http://localhost:5000/Menu/2').then(res => res.json()).then(data => {
      setEmpanizados(data);
    });
  }, []);

  return (
    <>
      <Header/>
      <Navbar/> 
      <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
        <h1>Menu</h1>
      </div>
      <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
        {entradas.forEach(entrada => {
          return (
            <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',paddingTop:20}}>
              <img src={urlStatics + entrada.rutaFoto} alt=""/>
              <h3>{entrada.producto}</h3>
              <h4>{entrada.precio}</h4>
            </div>
          )
        })}
      </div>
      <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
        <h1>Empanizados</h1>
      </div>
      <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',paddingTop:20}}>
        {empanizados.forEach(empanizado => {
          return (
            <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',paddingTop:20}}>
              <img src={urlStatics + empanizado.rutaFoto} alt=""/>
              <h3>{empanizado.producto}</h3>
              <h4>{empanizado.precio}</h4>
              <p>{empanizado.descripcion}</p>
            </div>
          )})}
      </div>

      <Footer/>
    </>
  );
}

export default App;
