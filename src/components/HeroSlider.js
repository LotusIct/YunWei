import React, { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80",
    title: "Experiência Gastronômica do Futuro",
    subtitle: "Tradição chinesa com tecnologia de ponta",
    buttonText: "Nossa História",
    link: "/about",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1470&q=80",
    title: "Sabores Autênticos",
    subtitle: "Ingredientes selecionados e apresentação impecável",
    buttonText: "Ver Cardápio",
    link: "/cardapio",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    title: "Conheça nossas Unidades",
    subtitle: "Inovação que encanta",
    buttonText: "Restaurantes",
    link: "/restaurantes",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>

            <a href={slide.link}>
              <button className="hero-btn">
                {slide.buttonText}
              </button>
            </a>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}