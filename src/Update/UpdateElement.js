import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateElement() {

    const urlStatic = "http://localhost:5000/static/";
  const { id } = useParams();
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rutaFoto, setRutaFoto] = useState();

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
        // const formData = new FormData();
        // formData.append("producto", producto);
        // formData.append("precio", precio);
        // formData.append("descripcion", descripcion);
        // formData.append("rutaFoto", rutaFoto);
        // console.log(formData);
        // fetch(`http://localhost:5000/Admin/update/${id}`, {
        //     method: "PUT",
        //     body: formData,
        // });
        
        fetch(`http://localhost:5000/Admin/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                producto,
                precio,
                descripcion,
                rutaFoto,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };


  //from with bootstrap styles

  return (
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
                id="Foto"
                className="form-control"
                accept="image/*"
                src={urlStatic + rutaFoto}
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
  );
}
