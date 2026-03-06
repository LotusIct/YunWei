import React from "react";
import "./Robos.css";

export default function Robos() {
  return (
    <section className="robos" id="robo">
      <div className="robos-container">

        {/* TEXTO */}
        <div className="robos-text">
          <span className="robos-tag">Tecnologia</span>

          <h2>
            Atendimento com <br />
            <strong>Robôs Inteligentes</strong>
          </h2>

          <p>
            No Yunwei, tradição e inovação caminham juntas.
            Nossos robôs de atendimento foram integrados à experiência
            gastronômica para trazer agilidade, precisão e um toque
            futurista ao seu momento à mesa.
          </p>

          <ul className="robos-list">
            <li>🤖 Entrega de pratos automatizada</li>
            <li>⚡ Atendimento rápido e eficiente</li>
            <li>✨ Experiência tecnológica única</li>
          </ul>

          <button className="robos-btn">
            Conheça a Experiência
          </button>
        </div>

        {/* IMAGEM */}
        <div className="robos-image">
          <img src="http://www.yunwei.com.br/wp-content/uploads/2025/07/f99721df5d911f3730854fcdd272d8b941dbe154.jpg" alt="Robô garçom Yunwei" />
        </div>

      </div>
    </section>
  );
}