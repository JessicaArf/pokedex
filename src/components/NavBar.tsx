import { Link } from "react-router-dom";
import {Nav, BtnGoBack} from "./Navbar.style"

type NavBarProps = {
hasGoBack?: boolean;
};

export const NavBar = (props: NavBarProps) => {
  return (
    <Nav className="nav">
    <Link to="/" className="brand">
      Pokédex
    </Link>
    {props.hasGoBack && (
      <BtnGoBack to="/">
        Voltar
      </BtnGoBack>
    )}
  </Nav>
);
};
