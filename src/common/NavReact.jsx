import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavReact = () => {
  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container className="d-flex justify-content-center">
        <Link to="/">
          <img
            className="logo"
            src="https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/logo-pokemon-79x45.png"
            alt="logo nav"
          />
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavReact;
