import {
  BrowserRouter, //é a função raiz da lib. Todas as rotas precisam estar declaradas dentro desse escopo, ou seja, nenhuma outra rota poderá ser acessada se não tiver sido declarada aqui. Lembrando que há apenas uma declaração de BrowserRouter no projeto.
  Routes, //é a função gerenciadora de rotas, podendo existir mais de uma na aplicação.
  Route, //é a função declarada das rotas, nela declararemos nossos componentes em padrões de páginas, podendo especificar informações como o caminho da rota entre outras informações relevantes.
} from "react-router-dom";
import { Home } from "../pages/home";
import { NotFound } from "../pages/404";
import { AboutMe } from "../pages/aboutMe";
import { Portfolio } from "../pages/portfolio";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesApp };
