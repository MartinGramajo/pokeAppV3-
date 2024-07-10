import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removerDeFavorito } from "../slices/pokeSlice";

const FavoritoScreen = () => {
  const favoritos = useSelector((state) => state.pokemon.favoritos);
  const dispatch = useDispatch();

  const handleRemoverDeFavorito = (id) => {
    dispatch(removerDeFavorito(id));
  };

  return (
    <div className="container pt-5 d-flex justify-content-center flex-wrap">
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
            <div className="d-flex justify-content-center pb-4">
              <Button
                className="btn-detalle-pokemon border-0"
                onClick={() => handleRemoverDeFavorito(favorito.id)}
                style={{ cursor: "pointer" }}
              >
                Quitar de favoritos
              </Button>
            </div>
          </Card>
        ))
      ) : (
        <section className="pt-5">
          <div className="d-flex justify-content-center">
            <Card className={`my-2 mx-3 card-pokemon`}>
              <div className="d-flex justify-content-between">
                <span className="hp"># ???</span>
              </div>
              <div className="pokemon-image-home">
                <Card.Img
                  variant="top"
                  src="https://as01.epimg.net/epik/imagenes/2018/11/16/portada/1542384053_864693_1542384302_noticia_normal.jpg"
                  className="pokemon-image-home"
                />
              </div>
            </Card>
          </div>
          <section className="py-5 text-center">
            <h6 className=" fs-22"> Todavía no se registraron favoritos</h6>
          </section>
        </section>
      )}
    </div>
  );
};

export default FavoritoScreen;
