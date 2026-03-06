import React, { useState, useEffect } from "react";
import "./PratosSlider.css";

const pratos = [
  {
    id: 1,
    nome: "Nome do Prato",
    imagem: "http://www.yunwei.com.br/wp-content/uploads/2025/07/c717caba348d4c091f77c6ed788eb2a4f99432f2.jpg",
  },
  {
    id: 2,
    nome: "Nome do Prato",
    imagem: "http://www.yunwei.com.br/wp-content/uploads/2025/08/Fotos-Cardapio-Yunwei-12.png",
  },
  {
    id: 3,
    nome: "Nome do Prato",
    imagem: "http://www.yunwei.com.br/wp-content/uploads/2025/08/Fotos-Cardapio-Yunwei-22.png",
  },
];

export default function PratosSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === pratos.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const format = (n) => (n < 10 ? `0${n}` : n);

  return (
    <section className="pratos">

      {/* indicador topo */}
      <div className="prato-indicator">
        {pratos.map((_, i) => (
          <span
            key={i}
            className={i === current ? "active" : ""}
            onClick={() => setCurrent(i)}
          >
            {format(i + 1)}
          </span>
        ))}
      </div>

      {pratos.map((prato, index) => (
        <div
          key={prato.id}
          className={`prato-slide ${index === current ? "active" : ""}`}
        >
          <div
            className="prato-bg"
            style={{ backgroundImage: `url(${prato.imagem})` }}
          />

          <div className="prato-overlay" />

          <div className="prato-content">
            <h2>{prato.nome}</h2>

            <a href="#cardapio">
              <button className="prato-btn">
                ◈ VEJA O CARDÁPIO COMPLETO ◈
              </button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}