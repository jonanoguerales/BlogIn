import "./contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../../components/navbar/Navbar";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_k3mn0fd", "template_os86fyp", form.current, "CuoAJEX6sR5-opZsN")
      .then((result) => {
        window.location.reload(); //Para refrescar la pagina
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
    <Navbar/>
    <div className="contact">
      <h1 className="contactTitle">Contacta con nosotros</h1>
      <div className="formData">
        <div className="formContainer">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <label className="contactLabel" htmlFor="">
              Nombre completo
            </label>
            <input type="text" className="contactInput" name="user_name" />
            <label className="contactLabel" htmlFor="">
              E-mail
            </label>
            <input type="email" className="contactInput" name="user_email" />
            <label className="contactLabel" htmlFor="">
              Mensaje
            </label>
            <textarea name="user_message" className="contactInput" cols="30" rows="3"></textarea>
            <button type="submit" className="contactBtn">Enviar</button>
          </form>
        </div>
        <div className="contactUs">
          <div className="contactTop">
            <h3>Contacto</h3>
            <span className="contactMail">blogreactmongo@gmail.com</span>
            <h3>Dirección</h3>
            <span className="contactMail">C/ Imaginaria, N/32 </span>
          </div>
          <div className="contactBottom">
            <a href="www.facebook.com" target="_blank">
              <i className="topIcon fab fa-facebook-square"></i>
            </a>
            <a href="www.instagram.com" target="_blank">
              <i className="topIcon fab fa-instagram-square"></i>
            </a>
            <a href="www.pinterest.com" target="_blank">
              <i className="topIcon fab fa-pinterest-square"></i>
            </a>
            <a href="www.twitter.com" target="_blank">
              <i className="topIcon fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contacto;
