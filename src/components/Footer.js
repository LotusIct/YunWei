import "./Footer.css";
import { FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* Marca */}
        <div className="footer-brand">
          <img
  src="http://www.yunwei.com.br/wp-content/uploads/2025/08/Logo-Restaurante-Charme-07.png"
  alt="Yunwei"
  className="footer-logo"
/>
          <p>Fique informado. Assine nossa newsletter.</p>

          <form className="newsletter">
            <input type="email" placeholder="Seu email" />
            <button type="submit">Inscrever-se</button>
          </form>
        </div>

        {/* Contato */}
        <div className="footer-contact">
          <h3>Contato</h3>

          <a href="tel:+5521968468178">
            <FaPhone /> +55 21 96846-8178
          </a>

          <a href="mailto:yunweibrasil@gmail.com">
            <FaEnvelope /> yunweibrasil@gmail.com
          </a>

          <a
            href="https://www.google.com/maps?q=Vogue+Square+Life+Experience+Barra+da+Tijuca+Rio+de+Janeiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt />
            Vogue Square Life Experience <br/>
            Av. das Américas – Barra da Tijuca <br/>
            Rio de Janeiro – RJ
          </a>

        </div>

        {/* Redes */}
        <div className="footer-social">

          <h3>Redes</h3>

          <div className="social-icons">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Yunwei — Todos os direitos reservados
      </div>

    </footer>
  );
}