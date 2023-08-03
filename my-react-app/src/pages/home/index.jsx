import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Main } from "../../components/main";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeUlStyled, HomeLiStyled } from "./styled";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const response = await api.get("/users");

      setUsers(response.data);
    };
    load();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <p>Home</p>
        <HomeUlStyled>
          {users.length > 0 &&
            users.map(({ login, avatar_url }) => {
              return (
                <HomeLiStyled key={login}>
                  <p>{login}</p>
                  <img
                    src={avatar_url}
                    style={{ borderRadius: 90, width: 90 }}
                  />
                  <Link to={`/portfolio/${login}`}>
                    Venha ver meu portfolio
                  </Link>
                </HomeLiStyled>
              );
            })}
        </HomeUlStyled>
      </Main>
      <Footer />
    </>
  );
}

export { Home };
