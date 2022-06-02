import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "../App.css";

export default function Pedidos() {

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [data, setData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://177.229.55.231:8080/Admin/Pedidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                telefono: telefono,
                data: data
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.response) {
                alert("Pedido realizado con exito");
                window.location.href = "/admin/pedidos";
            }
        })
    }

    return (
        <>
            <Header />
            <div id="navbar" style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to={"/admin/menu"} className="link">Menu Panel</Link>
                <Link to={"/admin/ventas"} className="link">Ventas</Link>
                <Link to={"/admin/pedidos"} className="link">Pedidos</Link>
            </div>

            <h1 style={{marginTop: 10,}}>Pedidos</h1>
            
            {/* formulario con entradas para nombre, telefono, un textarea */}
            <form style={{display: "flex", flexDirection: "column", marginTop: 20, height:300, justifyContent:"space-evenly"}}>
                <input type="text" placeholder="Nombre" onChange={e => setNombre(e.target.value)}></input>
                <input type="tel" placeholder="Telefono" onChange={e => setTelefono(e.target.value)}></input>
                <textarea placeholder="Escriba pedido" onChange={e => setData(e.target.value)}></textarea>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
    );
}