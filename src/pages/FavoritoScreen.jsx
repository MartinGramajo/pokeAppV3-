import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removerDeFavorito } from "../slices/pokeSlice";
import noEncontrado from "../assets/sinRegistrar.jpg";

const FavoritoScreen = () => {
  const favoritos = useSelector((state) => state.pokemon.favoritos);

  const dispatch = useDispatch();

  const handleRemoverDeFavorito = (id) => {
    dispatch(removerDeFavorito(id));
  };

  return (
    <div className="container d-flex flex-wrap">
      {favoritos.length > 0 ? (
        favoritos.map((favorito) => (
          <Card
            key={favorito.id}
            className={`my-2 mx-3 card-pokemon ${favorito.types[0]}`}
          >
            <div className="d-flex justify-content-between">
              <span className="hp"># {favorito.id}</span>
            </div>
            <div className="pokemon-image-home">
              <Card.Img
                variant="top"
                src={favorito.imageUrl}
                className="pokemon-image-home"
              />
            </div>
            <Card.Body className="text-center">
              <Card.Title className="pokemon-name">{favorito.name}</Card.Title>
              <Card.Text className="pokemon-type">
                {favorito.types.join(", ")}
              </Card.Text>
            </Card.Body>
            <Button
              className="pokemon-type border-0"
              onClick={() => handleRemoverDeFavorito(favorito.id)}
              style={{ cursor: "pointer" }}
            >
              Quitar de favoritos
            </Button>
          </Card>
        ))
      ) : (
        <section className="d-flex justify-content-center">
          <Card className={`my-2 mx-3 card-pokemon`}>
            <div className="d-flex justify-content-between">
              <span className="hp"># ???</span>
            </div>
            <div className="pokemon-image-home">
              <Card.Img
                variant="top"
                src={noEncontrado}
                className="pokemon-image-home"
              />
            </div>
            <Card.Body className="text-center">
              <Card.Title className="pokemon-name">
                No hay registros de un fav.
              </Card.Title>
            </Card.Body>
          </Card>
        </section>
      )}
    </div>
  );
};

export default FavoritoScreen;
