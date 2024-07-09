import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../slices/pokeSlice";
import CardPokemon from "./CardPokemon";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ListaPokemon = () => {
  const dispatch = useDispatch();
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroNombre, setFiltroNombre] = useState("");
  const [tipos, setTipos] = useState([]);
  const [limite, setLimite] = useState(20);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const listaPokemons = useSelector((state) => state.pokemon.pokemons);
  console.log("ListaPokemon ~ listaPokemons:", listaPokemons);
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

  let content;

  if (status === "Cargando") {
    content = <p>Cargando...</p>;
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

    content = (
      <>
        <section className="container">
          <Form.Group controlId="filtroTipo">
            <Form.Control
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

          <Form.Group controlId="filtroNombre" className="mt-3">
            <Form.Control
              type="text"
              placeholder="Buscar por nombre"
              value={filtroNombre}
              onChange={handleNombreChange}
            />
          </Form.Group>
        </section>

        <Container>
          <Row xs={1} lg={3} md={2} sm={1}>
            {limitarPokemons.map((pokemon, id) => (
              <Col key={id}>
                <CardPokemon pokemon={pokemon} />
              </Col>
            ))}
          </Row>
        </Container>

        {limitarPokemons.length < filtradoPokemons.length && (
          <div className="text-center mt-3">
            <Button variant="primary" onClick={handleLoadMore}>
              Cargar más
            </Button>
          </div>
        )}
      </>
    );
  } else if (status === "Rechazado") {
    content = <p>{error}</p>;
  }

  return (
    <div className="py-4">
      <h6 className="text-center">Lista de Pokémon</h6>
      {content}
    </div>
  );
};

export default ListaPokemon;
