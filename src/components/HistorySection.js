import React from "react";
import "./Historia.css";

export default function Historia() {
  return (
    <section id="historia" className="historia">
      <div className="historia-container">
        
        <div className="historia-header">
          <span className="historia-tag">Nossa História</span>
          <h2>Tradição, Cultura e Tecnologia</h2>
        </div>

        <div className="historia-content">
          <p>
            Inspirado nos sabores tradicionais, o <strong>Yunwei</strong> traz
            uma leitura contemporânea e fiel à culinária chinesa.
          </p>

          <p>
            Convidamos você a viver a essência da culinária chinesa de forma
            autêntica e sofisticada. Unimos tradições milenares à
            contemporânea transformação tecnológica, onde cada prato desperta
            os sentidos, carrega histórias, muito sabor e inovação.
          </p>

          <p>
            Mais do que uma refeição, criamos experiências que celebram a
            cultura, conectam pessoas, passado e futuro, e transformam
            momentos em memórias.
          </p>

          <p className="historia-highlight">
            No Yunwei, gastronomia é arte, presença e propósito.
          </p>
        </div>
      </div>
    </section>
  );
}