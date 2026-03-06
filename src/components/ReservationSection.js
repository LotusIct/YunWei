import React from "react";
import "./Eventos.css";

export default function Eventos() {
  return (
    <section className="eventos" id="eventos">
      <div className="eventos-overlay"></div>

      <div className="eventos-content">
        <span className="eventos-tag">Eventos & Reservas</span>

        <h2>O destino perfeito para todas as ocasiões</h2>

        <p>
          Nosso espaço está disponível para eventos fechados, encontros
          corporativos ou parcerias exclusivas. Um ambiente versátil e
          acolhedor, ideal para transformar sua ocasião em uma experiência
          memorável.
        </p>

        <p>
          Entre em contato e saiba como podemos fazer parte do seu
          momento especial.
        </p>

        <div className="eventos-buttons">
          <button className="btn-reserva">Reservar Mesa</button>
          <button className="btn-evento">Eventos Particulares</button>
        </div>
      </div>
    </section>
  );
}