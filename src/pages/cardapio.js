import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Cardapio.css";
import { FaUtensils, FaDrumstickBite, FaIceCream, FaCocktail } from "react-icons/fa";

export default function Cardapio() {

  const [categoria, setCategoria] = useState("entrada");
  const [pratoSelecionado, setPratoSelecionado] = useState(null);

  const ifood =
    "https://www.ifood.com.br";
const titulos = {
  entrada: "Entradas",
  principal: "Pratos Principais",
  sobremesa: "Sobremesas",
  bebida: "Bebidas"
};
  const menu = {
    entrada: [
      {
        nome: "Estalido da Floresta",
        desc: "Shimeji branco crocante com pimentões coloridos e molho especial da casa.",
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      },
      {
        nome: "Pipoca de Camarão",
        desc: "Camarões empanados crocantes com molho agridoce.",
        img: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa",
      }
    ],

    principal: [
      {
        nome: "Mangolia Beef",
        desc: "Filé mignon em tiras ao molho de soja, gengibre e alho.",
        img: "https://images.unsplash.com/photo-1604909052743-94e838986d24",
      },
      {
        nome: "Kung Pao Frango",
        desc: "Frango salteado com amendoim, legumes e molho picante.",
        img: "https://images.unsplash.com/photo-1604908554045-1a28c52b0f52",
      },
      {
        nome: "Frango Agridoce",
        desc: "Cubos de frango crocante com molho agridoce tradicional.",
        img: "https://images.unsplash.com/photo-1608039755401-742074f0548d",
      },
    ],

    sobremesa: [
      {
        nome: "Golden Bao",
        desc: "Bao crocante servido com sorvete de creme.",
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
      },
    ],

    bebida: [
      {
        nome: "Café Expresso",
        desc: "Café expresso com biscoito da casa.",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="cardapio-page">

        {/* MENU LATERAL */}

       <aside className="menu-lateral">

  <h2>Cardápio</h2>

  <button
    className={categoria === "entrada" ? "ativo" : ""}
    onClick={() => setCategoria("entrada")}
  >
    <FaUtensils />
    Entradas
  </button>

  <button
    className={categoria === "principal" ? "ativo" : ""}
    onClick={() => setCategoria("principal")}
  >
    <FaDrumstickBite />
    Pratos Principais
  </button>

  <button
    className={categoria === "sobremesa" ? "ativo" : ""}
    onClick={() => setCategoria("sobremesa")}
  >
    <FaIceCream />
    Sobremesas
  </button>

  <button
    className={categoria === "bebida" ? "ativo" : ""}
    onClick={() => setCategoria("bebida")}
  >
    <FaCocktail />
    Bebidas
  </button>
 <a href={ifood} target="_blank" rel="noopener noreferrer" className="ifood-button">
    <button className="ifood-btns">Pedir no iFood</button>
  </a>
</aside>

        {/* PRATOS */}

       <section className="pratos">

  <div className="pratos-header">
    <h2>{titulos[categoria]}</h2>
    <div className="pratos-linha"></div>
  </div>

  <div className="pratos-grid">
    {menu[categoria].map((prato, index) => (
      <div
        className="prato-card"
        key={index}
        onClick={() => setPratoSelecionado(prato)}
      >

        <img src={prato.img} alt={prato.nome} />

        <div className="prato-info">
          <h3>{prato.nome}</h3>
          <p>{prato.desc}</p>
        </div>

      </div>
    ))}
  </div>

</section>

      </div>

      {/* MODAL */}

      {pratoSelecionado && (

        <div className="modal-overlay">

          <div className="modal">

            <button
              className="modal-close"
              onClick={() => setPratoSelecionado(null)}
            >
              ✕
            </button>

            <div className="modal-content">

              <img src={pratoSelecionado.img} alt={pratoSelecionado.nome} />

              <div className="modal-text">

                <h2>{pratoSelecionado.nome}</h2>

                <p>{pratoSelecionado.desc}</p>

                <a href={ifood} target="_blank">
                  <button className="ifood-btn">
                    Pedir no iFood
                  </button>
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

      <Footer />

    </>
  );
}