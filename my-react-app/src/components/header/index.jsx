import { HeaderStyled } from "./styled";
import { Link } from "react-router-dom";

function Header() {
  const pages = [
    {
      route: "/",
      description: "Home",
    },
    {
      route: "/aboutMe",
      description: "About Me",
    },
    {
      route: "/portfolio",
      description: "Portfolio",
    },
  ];
  return (
    <HeaderStyled>
      <h1>My React App</h1>
      <nav>
        {pages.map(({ route, description }) => {
          return (
            <Link key={route} to={route}>
              {description}
            </Link>
          );
        })}
      </nav>
    </HeaderStyled>
  );
}

export { Header };
