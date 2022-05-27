import React, { useEffect, useState } from "react";
import { useParams,Link} from "react-router-dom";
import Header from "../Header";
import "../App.css";

export default function UpdateElement() {

    const { id } = useParams();
    const [producto, setProducto] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [rutaFoto, setRutaFoto] = useState(new File([], ""));

    useEffect(() => {
        fetch(`http://localhost:5000/productos/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProducto(data[0].producto);
                setPrecio(data[0].precio);
                setDescripcion(data[0].descripcion);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();


        var reader = new FileReader();
        reader.readAsDataURL(rutaFoto);
        reader.onload = function () {
            var base64 = reader.result;
            fetch(`http://localhost:5000/Admin/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    producto,
                    precio,
                    descripcion,
                    base64,
                    "rutaFoto": rutaFoto.name,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if(data.response){
                        window.location.href = "/admin/menu";
                    }else{
                        alert("Error al enviar los datos");
                    }
                });
        };



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
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
