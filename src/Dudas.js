import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Dudas() {
  const dudasRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "template_krx4xzi",
        dudasRef.current,
        "WEZC-gWIxtfP4RXwC"
      )
      .then(
        (result) => {
          alert("Mensaje enviado: " + result.text);
        },
        (error) => {
          alert("Hubo un error: " + error.text);
          //   console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <Navbar />
      <section id="Dudas" className="content">
        <div class="descripcion">
          <h2>DUDAS</h2>
          <p>Escribenos tus dudas!</p>
        </div>
        <div class="div-form">
          <form
            action=""
            method="post"
            id="form"
            class="form"
            ref={dudasRef}
            onSubmit={sendEmail}
          >
            <label for="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              required
            />
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <label for="mensaje">Comentario</label>
            <textarea
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              placeholder="comentario"
              required
            ></textarea>
            <input class="enviar" id="button" type="submit" value="Enviar" />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
