import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

function Portfolio() {
  const [repos, setRepos] = useState([]);
  const { username } = useParams();
  useEffect(() => {
    const load = async () => {
      const response = await api.get(`users/${username}/repos`);
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
