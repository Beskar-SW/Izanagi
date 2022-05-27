import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import './App.css'
import QuickOrders from "./Quickorders";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Admin() {

    const [usuario,setUsuario] = useState();
    const [contraseña,setContraseña] = useState();
    const [logeado,setLogeado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://backizanagi.herokuapp.com/Admin/${usuario}/${contraseña}`).then(res => res.json())
        .then(data => {
           if(data.length === 0){
                alert("Datos no validos")
           }else{
               setLogeado(true)
           }
        })
        .catch(e => console.log(e))
    }

    if(!logeado){
        return(
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Iniciar sesión</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Usuario</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario" onChange={(e)=>setUsuario(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" onChange={(e)=>setContraseña(e.target.value)}/>
                                </div>
                                <button type="button" className="btn btn-primary"  onClick={handleSubmit}>Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <Header/>
            <div id="navbar" style={{display:"flex",justifyContent:"space-around"}}>
                <Link to={"/admin/menu"} className="link">Menu Panel</Link>
                <Link to={"/admin/ventas"} className="link">Ventas</Link>
                <Link to={"/admin/pedidos"} className="link">Pedidos</Link>
            </div>
            <section>
                <div>
                    <h1>Pedidos rápidos</h1>
                </div>
                <div>
                    <h1>Ventas rápidas</h1>
                    <QuickOrders/>
                </div>
                <div>
                    <h1>Ventas Generadas</h1>
                </div>
            </section>
        </>
    );
}