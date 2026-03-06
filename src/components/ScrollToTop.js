import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Espera um tick para garantir que o conteúdo da página carregou
    setTimeout(() => {
      window.scrollTo(0, 0); // força scroll para o topo
    }, 0);
  }, [pathname]);

  return null;
}