import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavReact = () => {
  const favoritos = useSelector((state) => state.pokemon.favoritos);

  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container>
        <section className=" ">
          <div>
            <Link to="/">
              <img
                className="logo"
                src="https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/logo-pokemon-79x45.png"
                alt="logo nav"
              />
            </Link>
          </div>
        </section>
        <div>
          <Link className="text-decoration-none text-color-app" to="/favoritos">
            Ir Favoritos ({favoritos.length})
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavReact;
