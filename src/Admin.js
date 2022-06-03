import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Admin() {

    const [usuario,setUsuario] = useState();
    const [contraseña,setContraseña] = useState();
    const [logeado,setLogeado] = useState(false || localStorage.getItem('logeado'));
    const [pedidos,setPedidos] = useState([]);
    const [ventas,setVentas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://177.229.55.231:8080/Admin/${usuario}/${contraseña}`).then(res => res.json())
        .then(data => {
           if(data.length === 0){
                alert("Datos no validos")
           }else{
               //set usuario y contraseña en localStorage
                localStorage.setItem("usuario", usuario);
                localStorage.setItem("contraseña", contraseña);
                localStorage.setItem("logeado", true);
               setLogeado(true)
           }
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        fetch("http://177.229.55.231:8080/Admin/Pedidos",{
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => res.json())
        .then(data => {
            setPedidos(data)
        })

        fetch("http://177.229.55.231:8080/Admin/Ventas",{
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => res.json())
        .then(data => {
            setVentas(data)
        })        
    },[])

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

    const DisplayVentas = (string) => {
        var json = JSON.parse(string);
        var arr = [];
        for(var key in json){
            var temp = json[key];
            var st1 = `Producto: ${temp[0]}\nPrecio: ${temp[1]}\nCantidad: ${temp[2]}<br></br>`;

            arr.push(st1);
        }
        return arr.join("\n");
    }

    return (
        <>
            <Header/>
            <div id="navbar" style={{display:"flex",justifyContent:"space-around"}}>
                <Link to={"/admin/menu"} className="link">Menu Panel</Link>
                <Link to={"/admin/ventas"} className="link">Ventas</Link>
                <Link to={"/admin/pedidos"} className="link">Pedidos</Link>
            </div>
            <div>
                <h1>Pedidos</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Pedido</th>
                            </tr>
                    </thead>
                    <tbody>
                        {pedidos.map((pedido,index) => {
                            return(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{pedido.nombreCliente}</td>
                                    <td>{pedido.telefono}</td>
                                    <td>{pedido.data}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>    
            </div>
            <div>
                <h1>Ventas</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Venta</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Total</th>
                            </tr>
                    </thead>
                    <tbody>
                        {ventas.map((venta,index) => {
                            return(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{DisplayVentas(venta.data)}</td>
                                    <td>{new Date(venta.fecha).toUTCString()}</td>
                                    <td>{venta.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}