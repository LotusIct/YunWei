import "./Restaurantes.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Restaurantes() {
  return (
    <>
      <Navbar />

      <div className="restaurantes-page">

        {/* HERO SLIDER */}
        <section className="restaurantes-hero">

          <div className="restaurante-slider">

            <div className="slide slide1"></div>
            <div className="slide slide2"></div>
            <div className="slide slide3"></div>

          </div>

          <div className="restaurante-overlay"></div>

         

        </section>

        {/* LISTA RESTAURANTES */}
        <section className="restaurantes-list">

          <div className="container">
 <div className="restaurante-content">
            <h1>Nossos Restaurantes</h1>
            <p>Descubra os espaços onde tradição e inovação se encontram.</p>
          </div>
            {/* RESTAURANTE 1 */}
            <div className="restaurante-card">

              <div className="restaurante-img barra"></div>

              <div className="restaurante-info">

                <h2>Yunwei Barra</h2>

                <p>
                  Vogue Square Life Experience
                </p>

                <a
                  href="https://www.google.com/maps?q=Vogue+Square+Life+Experience+Barra+da+Tijuca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Av. das Américas – Barra da Tijuca  
                  Rio de Janeiro – RJ
                </a>

              </div>

            </div>

            {/* RESTAURANTE 2 */}
            <div className="restaurante-card">

              <div className="restaurante-img futuro"></div>

              <div className="restaurante-info">

                <h2>Nova Unidade</h2>

                <p>
                  Uma nova experiência Yunwei em breve.
                </p>

                <span className="coming">
                  Em breve
                </span>

              </div>

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}