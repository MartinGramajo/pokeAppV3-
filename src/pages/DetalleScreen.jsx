import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../slices/pokeSlice";
import { Container } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { iconTipo } from "../helpers/iconTipo";

const DetalleScreen = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const pokemonUnico = useSelector((state) => state.pokemon.poke);
  console.log("DetalleScreen ~ pokemonUnico:", pokemonUnico);

  useEffect(() => {
    dispatch(getPokemon(name));
  }, [dispatch, name]);

  if (!pokemonUnico || !pokemonUnico.stats || !pokemonUnico.types) {
    return (
      <section className="text-center">
        <img
          className="w-25"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs"
          alt="poke loader gif"
        />
      </section>
    );
  }

  const primaryType = pokemonUnico.types[0].type.name;
  const iconUrl = iconTipo(primaryType);

  const vida = pokemonUnico.stats.find(
    (stat) => stat.stat.name === "hp"
  ).base_stat;
  const ataque = pokemonUnico.stats.find(
    (stat) => stat.stat.name === "attack"
  ).base_stat;
  const defensa = pokemonUnico.stats.find(
    (stat) => stat.stat.name === "defense"
  ).base_stat;
  const velocidad = pokemonUnico.stats.find(
    (stat) => stat.stat.name === "speed"
  ).base_stat;
  const experiencia = pokemonUnico.base_experience;
  const peso = pokemonUnico.weight;
  const altura = pokemonUnico.height;

  const data = [
    { name: "hp", value: vida, fill: "#42f5ce" },
    { name: "Ata", value: ataque, fill: "#42f554" },
    { name: "Def", value: defensa, fill: "#f54242" },
    { name: "speed", value: velocidad, fill: "#4287f5" },
    { name: "exp", value: experiencia, fill: "#445678" },
    { name: "peso", value: peso, fill: "#413678" },
    { name: "altura", value: altura, fill: "#253732" },
  ];

  const sprites = [
    {
      src: pokemonUnico.sprites.front_default,
      alt: `${pokemonUnico.name} front default`,
    },
    {
      src: pokemonUnico.sprites.back_default,
      alt: `${pokemonUnico.name} back default`,
    },
    {
      src: pokemonUnico.sprites.front_shiny,
      alt: `${pokemonUnico.name} front shiny`,
    },
    {
      src: pokemonUnico.sprites.back_shiny,
      alt: `${pokemonUnico.name} back shiny`,
    },
  ];

  return (
    <Container>
      <section className="pt-4">
        <article className="text-center">
          <h6 className="fs-32">
            #{pokemonUnico.id} {pokemonUnico.name}
          </h6>
          <h5 className="mt-3">
            {" "}
            <img
              style={{ width: "50px", height: "50px" }}
              src={iconUrl}
              alt={primaryType}
            />
          </h5>
        </article>
        <article>
          <div className="d-flex flex-wrap justify-content-center pb-4">
            {sprites.map((sprite, index) => (
              <div className="metallic-card mx-2 my-2" key={index}>
                <img
                  style={{ width: "250px", height: "250px" }}
                  src={sprite.src}
                  alt={sprite.alt}
                />
              </div>
            ))}
          </div>
        </article>
        <article>
          <h6 className="fs-32 text-center my-4">Info del pokemon </h6>
          <h6 className=" fs-18 py-2 text-center">
            {pokemonUnico.species.description}
          </h6>
        </article>
        <article className="mt-4">
          <div>
            <div className="d-flex justify-content-center">
              <article className="d-none d-lg-block pb-5">
                <BarChart width={1000} height={400} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </article>
            </div>
            <article className="d-lg-none d-block pb-5">
              <section className="container">
                <div className="d-flex justify-content-around flex-wrap">
                  <article>
                    <div className="stat">
                      <span className="stat-name">Experiencia base</span>
                    </div>
                    <span className="stat-value">
                      {pokemonUnico.base_experience}
                    </span>
                    <div className="stat">
                      <span className="stat-name">Peso</span>
                    </div>
                    <span className="stat-value">{pokemonUnico.weight}Kg</span>
                    <div className="stat">
                      <span className="stat-name">Altura</span>
                    </div>
                    <span className="stat-value">{pokemonUnico.height}m</span>
                  </article>
                  <article>
                    <div className="stat">
                      <span className="stat-name">Attack</span>
                    </div>
                    <span className="stat-value">{ataque}</span>
                    <div className="stat">
                      <span className="stat-name">Defense</span>
                    </div>
                    <span className="stat-value">{defensa}</span>
                    <div className="stat">
                      <span className="stat-name">Speed</span>
                    </div>
                    <span className="stat-value">{velocidad}</span>
                  </article>
                </div>
              </section>
            </article>
          </div>
        </article>
      </section>
    </Container>
  );
};

export default DetalleScreen;
