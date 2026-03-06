import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Restaurantes from "./pages/restaurantes";
import Cardapio from "./pages/cardapio";
import ClubePontos from "./pages/pontos";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* garante scroll no topo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurantes" element={<Restaurantes />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/pontos" element={<ClubePontos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;