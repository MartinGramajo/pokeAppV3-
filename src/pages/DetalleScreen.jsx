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

import bugIcon from "../assets/icon/bug.svg";
import darkIcon from "../assets/icon/dark.svg";
import dragonIcon from "../assets/icon/dragon.svg";
import electricIcon from "../assets/icon/electric.svg";
import fairyIcon from "../assets/icon/fairy.svg";
import fightingIcon from "../assets/icon/fighting.svg";
import fireIcon from "../assets/icon/fire.svg";
import flyingIcon from "../assets/icon/flying.svg";
import ghostIcon from "../assets/icon/ghost.svg";
import grassIcon from "../assets/icon/grass.svg";
import groundIcon from "../assets/icon/ground.svg";
import iceIcon from "../assets/icon/ice.svg";
import normalIcon from "../assets/icon/normal.svg";
import poisonIcon from "../assets/icon/poison.svg";
import psychicIcon from "../assets/icon/psychic.svg";
import rockIcon from "../assets/icon/rock.svg";
import steelIcon from "../assets/icon/steel.svg";
import waterIcon from "../assets/icon/water.svg";

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

  const iconTipo = () => {
    switch (primaryType) {
      case "bug":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={bugIcon}
            alt="Bug"
          />
        );
      case "dark":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={darkIcon}
            alt="Dark"
          />
        );
      case "dragon":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={dragonIcon}
            alt="Dragon"
          />
        );
      case "electric":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={electricIcon}
            alt="Electric"
          />
        );
      case "fairy":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={fairyIcon}
            alt="Fairy"
          />
        );
      case "fighting":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={fightingIcon}
            alt="Fighting"
          />
        );
      case "fire":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={fireIcon}
            alt="Fire"
          />
        );
      case "flying":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={flyingIcon}
            alt="Flying"
          />
        );
      case "ghost":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={ghostIcon}
            alt="Ghost"
          />
        );
      case "grass":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={grassIcon}
            alt="Grass"
          />
        );
      case "ground":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={groundIcon}
            alt="Ground"
          />
        );
      case "ice":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={iceIcon}
            alt="Ice"
          />
        );
      case "normal":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={normalIcon}
            alt="Normal"
          />
        );
      case "poison":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={poisonIcon}
            alt="Poison"
          />
        );
      case "psychic":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={psychicIcon}
            alt="Psychic"
          />
        );
      case "rock":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={rockIcon}
            alt="Rock"
          />
        );
      case "steel":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={steelIcon}
            alt="Steel"
          />
        );
      case "water":
        return (
          <img
            style={{ width: "50px", height: "50px" }}
            src={waterIcon}
            alt="Water"
          />
        );
      default:
        return null;
    }
  };

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

  return (
    <Container>
      <section className="pt-4">
        <article className="text-center">
          <h6 className="fs-32">
            #{pokemonUnico.id} {pokemonUnico.name}
          </h6>
          <h5>{iconTipo()}</h5>
        </article>
        <article>
          <div className="d-flex flex-wrap  justify-content-center py-4">
            <div className="card-pokemon">
              <img
                style={{ width: "300px", height: "300px" }}
                src={pokemonUnico.sprites.front_default}
                alt={pokemonUnico.name}
              />
            </div>
            <div className="card-pokemon">
              <img
                style={{ width: "300px", height: "300px" }}
                src={pokemonUnico.sprites.back_default}
                alt={pokemonUnico.name}
              />
            </div>
            <div className="card-pokemon">
              <img
                style={{ width: "300px", height: "300px" }}
                src={pokemonUnico.sprites.front_shiny}
                alt={pokemonUnico.name}
              />
            </div>
            <div className="card-pokemon">
              <img
                style={{ width: "300px", height: "300px" }}
                src={pokemonUnico.sprites.back_shiny}
                alt={pokemonUnico.name}
              />
            </div>
            <h6 className=" fs-18">{pokemonUnico.species.description}</h6>
          </div>
        </article>
        <article>
          <h6 className="fs-32 text-center my-4">Estadísticas base</h6>
          <div>
            <div className="d-flex justify-content-center">
              <article className="d-none d-lg-block">
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
