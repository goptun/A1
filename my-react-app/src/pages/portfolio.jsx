import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { useEffect, useState } from "react";
import { api } from "../services/api";

function Portfolio() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const load = async () => {
      const response = await api.get("users/goptun/repos");
      setRepos(response.data);
    };
    load();
  }, []);
  return (
    <>
      <Header />
      <Main>
        <p>Portfolio</p>
        <ul>
          {repos.length > 0 &&
            repos.map(({ html_url, name }) => {
              return <li key={name}>{name}</li>;
            })}
        </ul>
      </Main>
      <Footer />
    </>
  );
}

export { Portfolio };
