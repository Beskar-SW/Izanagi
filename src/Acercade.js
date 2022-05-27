import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Acercade() {
  return (
    <>
      <Header />
      <Navbar />
      <section id="AcercaDe" class="content">
        <div class="grid-AD">
          <div id="areaAD" class="areaAD">
            <h2>Acerca de</h2>
            <p>
              Izanagi Sushi nace a la idea del emprendimiento, el cual lleva
              aproximadamente 6 meses dando servicio , este establecimiento es
              un pequeño negocio que se dedica a la venta de comida rápida
              japonesa, ofreciendo una amplia gama de rollos, kushiages,
              temakis.
            </p>
          </div>
          <div id="areaBD" class="areaBD">
            <img src="https://backizanagi.herokuapp.com/static/Izanagilogo.png" alt=""/>
          </div>
        </div>
        <div class="contaco">
          <h2>Contacto</h2>
          <p>
            ¡Queremos saber de ti! Escríbenos y nos pondremos en contacto
            contigo.{" "}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
