import { useEffect, useState } from "react";
import "./Depoimentos.css";

const depoimentos = [
  {
    id: 1,
    nome: "Marina Souza",
    texto:
      "Uma experiência incrível! A comida é deliciosa e os robôs tornam tudo ainda mais especial.",
  },
  {
    id: 2,
    nome: "Carlos Mendes",
    texto:
      "O melhor restaurante chinês que já fui. Ambiente sofisticado e atendimento impecável.",
  },
  {
    id: 3,
    nome: "Fernanda Lima",
    texto:
      "Tecnologia e gastronomia combinadas perfeitamente. Voltarei muitas vezes!",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % depoimentos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="depoimentos">

      <div className="depoimentos-header">
        <h2>O que dizem sobre o Yunwei</h2>
        <p>Experiências reais de nossos clientes</p>
      </div>

      <div className="depoimentos-slider">
        {depoimentos.map((item, i) => (
          <div
            key={item.id}
            className={`depoimento-card ${i === index ? "active" : ""}`}
          >

            <p className="texto">“{item.texto}”</p>

            <div className="cliente">
              {item.nome}
            </div>

            <div className="estrelas">★★★★★</div>

          </div>
        ))}
      </div>

      <div className="depoimentos-dots">
        {depoimentos.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

    </section>
  );
}