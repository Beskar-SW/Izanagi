import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateElement() {
  const urlStatics = "http://localhost:5000/static/";
  const { id } = useParams();
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rutaFoto, setRutaFoto] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/productos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data[0].producto);
        setPrecio(data[0].precio);
        setDescripcion(data[0].descripcion);
        setRutaFoto(data[0].rutaFoto);
      });
  }, []);

  //from with bootstrap styles

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Editar Producto</h1>
          <form>
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
                className="form-control"
                onChange={(e) => setRutaFoto(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                // fetch(`http://localhost:5000/productos/${id}`, {
                //   method: "PUT",
                //   headers: {
                //     "Content-Type": "application/json",
                //   },
                //   body: JSON.stringify({
                //     producto,
                //     precio,
                //     descripcion,
                //     rutaFoto,
                //   }),
                // });
                e.preventDefault();
                console.log(producto, precio, descripcion, rutaFoto);
            }}
            >Actualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
