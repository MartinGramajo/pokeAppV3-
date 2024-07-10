import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../slices/pokeSlice";
import CardPokemon from "./CardPokemon";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import pokedex from "../assets/pokedex.png";
import flecha from "../assets/flechaTop.png";
import noEncontrado from "../assets/sinRegistrar.jpg";

const ListaPokemon = () => {
  const dispatch = useDispatch();
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroNombre, setFiltroNombre] = useState("");
  const [tipos, setTipos] = useState([]);
  const [limite, setLimite] = useState(20);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const listaPokemons = useSelector((state) => state.pokemon.pokemons);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (listaPokemons.length > 0) {
      const tipos = new Set();
      listaPokemons.forEach((pokemon) => {
        pokemon.types.forEach((type) => tipos.add(type));
      });
      setTipos(Array.from(tipos));
    }
  }, [listaPokemons]);

  const handleTipoChange = (event) => {
    setFiltroTipo(event.target.value);
  };

  const handleNombreChange = (event) => {
    setFiltroNombre(event.target.value);
  };

  const handleLoadMore = () => {
    setLimite((prevLimite) => prevLimite + 20);
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  let content;

  if (status === "Cargando") {
    content = (
      <section className="text-center">
        <img
          className="w-25"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs"
          alt="poke loader gif"
        />
      </section>
    );
  } else if (status === "Exitoso") {
    let filtradoPokemons = listaPokemons;
    if (filtroTipo) {
      filtradoPokemons = filtradoPokemons.filter((pokemon) =>
        pokemon.types.includes(filtroTipo)
      );
    }
    if (filtroNombre) {
      filtradoPokemons = filtradoPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filtroNombre.toLowerCase())
      );
    }
    const limitarPokemons = filtradoPokemons.slice(0, limite);

    if (limitarPokemons.length === 0) {
      content = (
        <>
          <section className="container d-flex flex-wrap justify-content-around pb-4">
            <Form.Group controlId="filtroNombre">
              <Form.Label className="fs-18">Buscar por pokemon</Form.Label>
              <Form.Control
                type="text"
                className="input-buscar"
                placeholder="Buscar"
                value={filtroNombre}
                onChange={handleNombreChange}
              />
            </Form.Group>
            <Form.Group controlId="filtroTipo">
              <Form.Label className="fs-18">Filtrar por tipo</Form.Label>
              <Form.Control
                className="input-buscar"
                as="select"
                value={filtroTipo}
                onChange={handleTipoChange}
              >
                <option value="">Todos</option>
                {tipos.map((tipo, index) => (
                  <option key={index} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </section>

          <section className="d-flex justify-content-center">
            <Card className="my-3 mx-3 card-pokemon">
              <Card.Img
                variant="top"
                src={noEncontrado}
                className="pokemon-image-home"
              />
              <Card.Body>
                <Card.Title>Pokemon no encontrado</Card.Title>
                <Card.Text>
                  No se encontraron Pokémon que coincidan con la busqueda.
                </Card.Text>
              </Card.Body>
            </Card>
          </section>
        </>
      );
    } else {
      content = (
        <>
          <section className="container d-flex flex-wrap justify-content-around pb-4">
            <Form.Group controlId="filtroNombre">
              <Form.Label className="fs-18">Buscar por pokemon</Form.Label>
              <Form.Control
                type="text"
                className="input-buscar"
                placeholder="Buscar"
                value={filtroNombre}
                onChange={handleNombreChange}
              />
            </Form.Group>
            <Form.Group controlId="filtroTipo">
              <Form.Label className="fs-18">Filtrar por tipo</Form.Label>
              <Form.Control
                className="input-buscar"
                as="select"
                value={filtroTipo}
                onChange={handleTipoChange}
              >
                <option value="">Todos</option>
                {tipos.map((tipo, index) => (
                  <option key={index} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </section>

          <Container>
            <Row xs={1} lg={3} md={2} sm={1}>
              {limitarPokemons.map((pokemon, id) => (
                <Col className="d-flex justify-content-center" key={id}>
                  <CardPokemon pokemon={pokemon} />
                </Col>
              ))}
            </Row>
          </Container>

          {limitarPokemons.length < filtradoPokemons.length && (
            <div className="text-center mt-3">
              <Button className="btn-cargar-pokemon" onClick={handleLoadMore}>
                <img className="w-25" src={pokedex} alt="poke loader gif" /> Ver
                más
              </Button>
            </div>
          )}
        </>
      );
    }
  } else if (status === "Rechazado") {
    content = <p>{error}</p>;
  }

  return (
    <div className="py-4">
      {content}
      {isVisible && (
        <Button onClick={scrollToTop} className="scroll-to-top btn-scroll-top">
          <img className="me-3" src={flecha} alt="flecha top" />
        </Button>
      )}
    </div>
  );
};

export default ListaPokemon;
