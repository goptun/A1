//é a função raiz da lib. Todas as rotas precisam estar declaradas dentro desse escopo, ou seja, nenhuma outra rota poderá ser acessada se não tiver sido declarada aqui. Lembrando que há apenas uma declaração de BrowserRouter no projeto.

//é a função gerenciadora de rotas, podendo existir mais de uma na aplicação.

//é a função declarada das rotas, nela declararemos nossos componentes em padrões de páginas, podendo especificar informações como o caminho da rota entre outras informações relevantes.

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFound } from "../pages/notfound";
import { AboutMe } from "../pages/aboutMe";
import { Portfolio } from "../pages/portfolio";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio/:username" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesApp };
