import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StoreState } from "../redux";
import {Nav, BtnGoBack, TotalPokemons} from "./Navbar.style"

type NavBarProps = {
hasGoBack?: boolean;
};

export const NavBar = (props: NavBarProps) => {

  const totalPokemons = useSelector((state: StoreState) => state.favorite);

  return (
    <Nav className="nav">
    <Link to="/" className="brand">
      Pokédex
    </Link>
    <Link to="/favorite">
    <TotalPokemons>
       Total de favoritos: {totalPokemons.length}
    </TotalPokemons>
    </Link>
    {props.hasGoBack && (
      <BtnGoBack to="/">
        Voltar
      </BtnGoBack>
    )}
  </Nav>
);
};
