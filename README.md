#  Criando uma aplicação em React

#### [M1S11 - Aula 01]

* Data: 31/07/2023
* Professor: Pedro Henrique B. da Silva
* GitHub: <https://github.com/pedrohbsilva/> 


#### Instruções:
- **Passo 1**: Para começar, iremos criar uma aplicação React utilizando o Vite, com o comando abaixo: 
```npm create vite@latest my-react-app -- --template react```

- **Passo 2**: Após o projeto ser criado, devemos acessar a pasta, utilizando o comando no terminal: 
```cd my-react-app```

- **Passo 3**: Uma vez estando no projeto, devemos instalar as dependências com o comando:
```npm install```

- **Passo 4**: Por fim, devemos remover todos os itens desnecessários (códigos ou arquivos) na aplicação.
- Apague os seguintes arquivos:
*App.css*
*index.css*

- **Passo 5**: Altere o arquivo main.jsx por: 
~~~javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
~~~

- **Passo 6**: Altere o arquivo App.jsx por: 

~~~javascript
function App() {
  return (<p>Hello World</p>)
}
export default App
~~~

- **Passo 7**: Agora iremos trabalhar com rotas. Para começar, vamos instalar a dependência utilizando o comando:
```npm install react-router-dom```

- **Passo 8**: Após a instalação ter sido concluída com sucesso, crie 2 pastas. Uma chamada **routes** e outra chamada **pages**.

- **Passo 9**: Dentro da pasta pages, crie um arquivo chamado *home.jsx* e adicione o seguinte código:

~~~javascript 
function Home() {
  return (<p>Home</p>)
}
export default Home
~~~

- **Passo 10**: Dentro da pasta routes, crie um arquivo chamado *index.jsx* e adicione o seguinte código:

~~~javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export { RoutesApp };
~~~

- **Passo 12**: Dentro do arquivo *App.jsx*, troque o código antigo pelo código abaixo:

~~~javascript
import { RoutesApp } from "./routes";
function App() {
  return (
    <>
      <RoutesApp />
    </>
  );
}
export default App;
~~~

Por fim, seguindo todos esse passos você terá uma aplicação **React Router DOM**! ✅





