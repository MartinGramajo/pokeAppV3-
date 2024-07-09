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

  useEffect(() => {
    dispatch(getPokemon(name));
  }, [dispatch, name]);

  // Verificación de datos
  if (!pokemonUnico || !pokemonUnico.stats || !pokemonUnico.types) {
    return <div>Loading...</div>;
  }

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

  const data = [
    { name: "speed", value: velocidad, fill: "#4287f5" },
    { name: "Def", value: defensa, fill: "#f54242" },
    { name: "Ata", value: ataque, fill: "#42f554" },
    { name: "hp", value: vida, fill: "#42f5ce" },
  ];

  return (
    <Container>
      <section className="pt-4">
        <article className="text-center">
          <h6 className="fs-22">
            {pokemonUnico.name} #{pokemonUnico.id}
          </h6>
          <h5 className="${primaryType}">{iconTipo()}</h5>
        </article>
        <article>
          <div className="d-flex flex-wrap  justify-content-center">
            <div className={`card-pokemon ${primaryType}`}>
              <img
                style={{ width: "300px", height: "300px" }}
                src={pokemonUnico.sprites.front_default}
                alt={pokemonUnico.name}
              />
              <h6> Apariencia Base</h6>
            </div>
            <div className={`card-pokemon ${primaryType}`}>
              <img
                style={{ width: "300px", height: "300px" }}
                src={pokemonUnico.sprites.front_shiny}
                alt={pokemonUnico.name}
              />
              <h6> Apariencia Shiny</h6>
            </div>
            <h6 className="text-center">{pokemonUnico.species.description}</h6>
          </div>
        </article>
        <article className="mt-5">
          <div className="text-center">
            <h6 className="fs-22">Estadísticas base</h6>
          </div>
          <section className="d-flex justify-content-around flex-wrap py-5">
            <div className="pokemon-stats">
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
            </div>
            <div className="pokemon-stats">
              <div className="stat">
                <span className="stat-name">Experiencia base</span>
              </div>
              <span className="stat-value">{pokemonUnico.base_experience}</span>
              <div className="stat">
                <span className="stat-name">Peso</span>
              </div>
              <span className="stat-value">{pokemonUnico.weight}Kg</span>
              <div className="stat">
                <span className="stat-name">Altura</span>
              </div>
              <span className="stat-value">{pokemonUnico.height}m</span>
            </div>
          </section>
        </article>
        <article>
          <h6 className="fs-22 text-center mt-4">Gráfica</h6>
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

              <article className="d-lg-none d-block ">
                <BarChart width={340} height={400} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </article>
            </div>
          </div>
        </article>
      </section>
    </Container>
  );
};

export default DetalleScreen;
