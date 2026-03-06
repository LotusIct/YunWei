import React, { useState, useEffect } from "react";
import { FaInstagram, FaTiktok, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img
                src="http://www.yunwei.com.br/wp-content/uploads/2025/08/Logo-Restaurante-Charme-07.png"
                alt="Logo Restaurante"
              />
            </Link>
          </div>

          <nav className="navbar-menu">
            <Link to="/about">História</Link>
            <Link to="/restaurantes">Restaurantes</Link>
            <Link to="/cardapio">Cardápio</Link>
            <Link to="/pontos">Clube de Pontos</Link>
            <a href="#footer">Contato</a>
          </nav>

        <div className="navbar-action">
  <a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer">
    <button className="delivery-btn">Delivery</button>
  </a>
</div>

          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* OVERLAY ESCURO */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>

        <div className="mobile-content">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>História</Link>
          <Link to="/restaurantes" onClick={() => setMenuOpen(false)}>Restaurantes</Link>
          <Link to="/cardapio" onClick={() => setMenuOpen(false)}>Cardápio</Link>
          <Link to="/pontos" onClick={() => setMenuOpen(false)}>Clube de Pontos</Link>
          <a href="#footer" onClick={() => setMenuOpen(false)}>Contato</a>

          <a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer">
  <button className="delivery-btn mobile-btn">Delivery</button>
</a>

          <div className="mobile-social">
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://tiktok.com"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </>
  );
}