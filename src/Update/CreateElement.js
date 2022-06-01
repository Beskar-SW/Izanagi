import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "../App.css";

export default function CreateElement() {

    const [producto, setProducto] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [rutaFoto, setRutaFoto] = useState("");
    const [tipo, setTipo] = useState("1");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(rutaFoto === ""){
            alert("Selecciona una imagen");
            return;
        }        

        const formData = new FormData();
        formData.append("producto", producto);
        formData.append("precio", precio);
        formData.append("descripcion", descripcion);
        formData.append("foto", rutaFoto);
        formData.append("tipo", tipo);

        fetch(`http://177.229.55.231:8080/Admin/create`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: formData
        }).then((res) => {
            if (res.status === 200) {
                alert("Producto agregado");
                window.location.href = "/admin/menu";
            } else {
                alert("Error al agregar producto");
            }
        });

    };

    return (
        <>
            <Header />
            <div
                id="navbar"
                style={{ display: "flex", justifyContent: "space-around" }}
            >
                <Link to={"/admin/menu"} className="link">
                    Menu Panel
                </Link>
                <Link to={"/admin/ventas"} className="link">
                    Ventas
                </Link>
                <Link to={"/admin/pedidos"} className="link">
                    Pedidos
                </Link>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1>Editar Producto</h1>
                        <form encType="multipart/form-data">
                            <div className="form-group">
                                <label>Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={producto}
                                    onChange={(e) => setProducto(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Descripcion</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Ruta de la foto</label>
                                <input
                                    type="file"
                                    alt=""
                                    className="form-control"
                                    accept="image/*"
                                    name="rutaFoto"
                                    onChange={(e) => setRutaFoto(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group">
                                <label>Tipo</label>
                                <select
                                    className="form-control"
                                    value={tipo}
                                    onChange={(e) => setTipo(e.target.value)}
                                >
                                    <option value="1">Plato Fuerte</option>
                                    <option value="2">Empanizados</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
