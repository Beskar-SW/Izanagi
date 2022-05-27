import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./App.css";

export default function MenuUpdate() {
  const urlStatics = "http://localhost:5000/static/";

  const [entradas, setEntradas] = useState([]);
  const [empanizados, setEmpanizados] = useState([]);

  async function getEntradas() {
    const response = await fetch("http://localhost:5000/Menu/1");
    const data = await response.json();
    return data;
  }

  async function getEmpanizados() {
    const response = await fetch("http://localhost:5000/Menu/2");
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const promise = getEntradas();
    promise.then((data) => {
      data.forEach((entrada) => {
        setEntradas((entradas) => [...entradas, entrada]);
      });
    });

    const promise2 = getEmpanizados();
    promise2.then((data) => {
      data.forEach((empanizado) => {
        setEmpanizados((empanizados) => [...empanizados, empanizado]);
      });
    });
  }, []);

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <h1>Menu</h1>
      </div>
      <div id="grid">
        {entradas === null ? (
          <h1>Cargando...</h1>
        ) : (
          entradas.map((entrada) => {
            return (
              <div key={entrada.idProducto} id="areaA">
                <ul>
                  <li>
                    <img
                      src={urlStatics + entrada.rutaFoto}
                      alt=""
                      height={"100%"}
                    />
                  </li>
                  <li>
                    <h3>{entrada.producto}</h3>
                  </li>
                  <li>
                    <p>{entrada.descripcion}</p>
                  </li>
                  <li>
                    <Link to={`/admin/menu/${entrada.idProducto}`} className="btn btn-primary btn-sm">Update</Link>
                  </li>
                </ul>
              </div>
            );
          })
        )}
        {empanizados.length === 0 ? (
          <h1>Cargando...</h1>
        ) : (
          empanizados.map((empanizado) => {
            return (
              <div key={empanizado.idProducto} id="areaA">
                <ul>
                  <li>
                    <img
                      src={urlStatics + empanizado.rutaFoto}
                      alt=""
                      height={"100%"}
                    />
                  </li>
                  <li>
                    <h3>{empanizado.producto}</h3>
                  </li>
                  <li>
                    <p>{empanizado.descripcion}</p>
                  </li>
                  <li>
                    <Link to={`/admin/menu/${empanizado.idProducto}`}></Link>
                  </li>
                </ul>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
