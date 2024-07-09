import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { agregarEnFavorito } from "../slices/pokeSlice";

export default function CardPokemon({ pokemon }) {
  const dispatch = useDispatch();

  const handleAgregarEnFavorito = (id) => {
    dispatch(agregarEnFavorito(id));
  };

  return (
    <div>
      <Card className={`my-2 mx-3 card-pokemon ${pokemon.types[0]}`}>
        <div className="d-flex justify-content-between">
          <span className="hp"># {pokemon.id}</span>
        </div>
        <div className="pokemon-image-home">
          <Card.Img
            variant="top"
            src={pokemon.imageUrl}
            className="pokemon-image-home"
          />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="pokemon-name">
            <span
              className="favoritos"
              onClick={() => handleAgregarEnFavorito(pokemon.id)}
              style={{ cursor: "pointer" }}
            >
              agregar en fav
            </span>
            {pokemon.name}
          </Card.Title>
          <Card.Text className="pokemon-type">
            {pokemon.types.join(", ")}
          </Card.Text>
        </Card.Body>
        <Button
          className="pokemon-type border-0"
          as={Link}
          to={`detalle/${pokemon.name}`}
        >
          Ver detalle
        </Button>
      </Card>
    </div>
  );
}
