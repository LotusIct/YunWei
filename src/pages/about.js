import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Historias.css";

export default function Historia() {
  return (
    <>
      <Navbar />

      <main className="historia-page">

        {/* HERO */}
        <section className="historia-hero">
          <img
            src="https://www.yunwei.com.br/wp-content/uploads/2025/08/Banner-Home.png"
            alt="Banner Hero"
          />
        </section>

        {/* INTRO */}
        <section className="historia-intro container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Uma jornada entre passado e futuro</h2>
              <p>
                Inspirado nos sabores tradicionais, o Yunwei traz uma leitura
                contemporânea e fiel à culinária chinesa.
              </p>
              <p>
                Convidamos você a viver a essência da gastronomia chinesa de forma
                autêntica e sofisticada. Unimos tradições milenares à transformação
                tecnológica contemporânea.
              </p>
              <p>
                Mais do que uma refeição, criamos experiências que celebram a
                cultura e transformam momentos em memórias.
              </p>
            </div>

            <div className="intro-img">
              <img
                src="https://images.unsplash.com/photo-1555126634-323283e090fa"
                alt="Introdução"
              />
            </div>
          </div>
        </section>

        {/* TRADIÇÃO */}
        <section className="historia-tradicao container">
          <div className="grid">
            <div className="historia-img">
              <img
                src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
                alt="Tradição"
              />
            </div>

            <div className="historia-text">
              <h2>Tradição que atravessa gerações</h2>
              <p>
                A culinária chinesa é uma das mais antigas do mundo,
                construída ao longo de milhares de anos.
              </p>
              <p>
                Cada técnica e ingrediente carrega respeito pela
                história e cultura do povo chinês.
              </p>
            </div>
          </div>
        </section>

        {/* TECNOLOGIA */}
        <section className="historia-tecnologia container">
          <div className="grid">
            <div className="historia-text">
              <h2>Inovação e tecnologia</h2>
              <p>
                O Yunwei representa também o futuro da gastronomia.
                Integramos tecnologia ao ambiente e ao atendimento.
              </p>
              <p>
                Robôs de serviço e design contemporâneo transformam
                cada visita em algo único.
              </p>
            </div>

            <div className="historia-img">
              <img
                src="https://images.unsplash.com/photo-1598514983318-2f64f8f4796c"
                alt="Tecnologia"
              />
            </div>
          </div>
        </section>

        {/* BANNER FINAL */}
       <section className="historia-banner">
  <img
    src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf"
    alt="Banner Final"
  />
  
  {/* Overlay */}
  <div className="banners-overlay"></div>

  {/* Conteúdo do texto */}
  <div className="banner-content">
    <h2>Gastronomia é mais do que comida</h2>
    <p>É cultura, tradição e inovação servidas em cada detalhe.</p>
    <div className="banner-line"></div>
    <span>Bem-vindo ao Yunwei</span>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}