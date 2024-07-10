import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { agregarEnFavorito, removerDeFavorito } from "../slices/pokeSlice";
import starEmpty from "../assets/starEmpty.svg";
import starFilled from "../assets/starFilled.svg";
import detalle from "../assets/detalle.png";

export default function CardPokemon({ pokemon }) {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.pokemon.favoritos);

  const esFavorito = favoritos.some((fav) => fav.id === pokemon.id);

  const handleFavoritoClick = () => {
    if (esFavorito) {
      dispatch(removerDeFavorito(pokemon.id));
    } else {
      dispatch(agregarEnFavorito(pokemon.id));
    }
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
          <Card.Title className="pokemon-name ">{pokemon.name}</Card.Title>
          <Card.Text className="pokemon-type">
            {pokemon.types.join(", ")}
          </Card.Text>
        </Card.Body>
        <section className="d-flex  justify-content-center">
          <Button
            className=""
            onClick={handleFavoritoClick}
            style={{ cursor: "pointer", background: "none", border: "none" }}
          >
            <img
              className="estrella-favorito"
              src={esFavorito ? starFilled : starEmpty}
              alt={esFavorito ? "Remover de favoritos" : "Agregar a favoritos"}
            />{" "}
          </Button>
          <div className="mt-2">
            <h6>
              {esFavorito ? "Remover de favoritos" : "Agregar a favoritos"}
            </h6>
          </div>
        </section>
        <section className="py-4">
          <Button
            className="btn-detalle-pokemon border-0 mt-4"
            as={Link}
            to={`detalle/${pokemon.name}`}
          >
            <img className="me-3" src={detalle} alt="poke detalle" />
            Ver detalle
          </Button>
        </section>
      </Card>
    </div>
  );
}
