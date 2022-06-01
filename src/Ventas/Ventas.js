import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "../App.css";

export default function Ventas() {

    const [productos, setProductos] = useState([]);

    const Agregar = () => {
        //agregar nuevos inputs
        var nuevo = document.getElementById("Articulos");
        var div = document.createElement("div");
        div.style = "display: flex; flex-direction: row; width: 75%; marginTop: 10;";
        
        var input = document.createElement("input");
        
        input.type = "text";
        input.placeholder = "Cantidad";
        
        var select = document.createElement("select");
        select.className = "form-control";
        select.id = "exampleFormControlSelect1";
        //option por cada elemento del array
        productos.forEach(element => {
            var option = document.createElement("option");
            option.value = element.producto;
            option.innerHTML = element.producto;
            option.key = Math.floor(Math.random() * 100);;
            select.appendChild(option);
        });

        var button = document.createElement("button");
        button.innerHTML = "Eliminar";
        button.className = "btn btn-danger";

        div.appendChild(select);
        div.appendChild(input);
        div.appendChild(button);
        nuevo.appendChild(div);
    }

    useEffect(() => {
        fetch(`http://177.229.55.231:8080/allproducts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                setProductos(data);
            })
    });


    return (
        <>
            <Header />
            <div id="navbar" style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to={"/admin/menu"} className="link">Menu Panel</Link>
                <Link to={"/admin/ventas"} className="link">Ventas</Link>
                <Link to={"/admin/pedidos"} className="link">Pedidos</Link>
            </div>

            <div style={{ padding: 10 }}>
                <h1>Ventas</h1>
                <div style={{ display: "flex", flexDirection: "column",marginTop: 20, }} id={"Articulos"}>
                    <div style={{ display: "flex", flexDirection: "row", width:"75%" }}>
                        <select className="form-control" id="exampleFormControlSelect1">
                            {productos.map((producto, index) => {
                                return (
                                    <option key={index} value={producto.producto}>{producto.producto}</option>
                                )
                            })}
                        </select>
                        <input type={"text"} placeholder="Cantidad" style={{marginLeft: 10,}}></input>
                        <button className="btn btn-danger" style={{marginLeft:10}}>Eliminar</button>
                    </div>
                </div>
                <div>
                <button className="btn btn-primary" style={{marginTop: 30,}} onClick={Agregar}>Agregar nuevo producto</button>
                <button className="btn btn-primary" style={{marginTop: 30,marginLeft: 20,}} onClick={Agregar}>Generar Cuenta</button>
                </div>
            </div>
        </>
    )
}