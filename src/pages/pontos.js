import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ClubePontos.css"; // você pode usar o mesmo CSS ou criar outro

export default function ClubePontos() {
  return (
    <>
      <Navbar />

      <div className="banner-restaurante">
        <div className="banner-overlay">
          <h1>Clube de Pontos</h1>
          <p>Estamos preparando algo delicioso para você! Em breve disponível.</p>
          <button className="banner-btn">Conheça nosso cardápio</button>
        </div>
      </div>

      <Footer />
    </>
  );
}