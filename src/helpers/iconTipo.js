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

export const iconTipo = (type) => {
  switch (type) {
    case "bug":
      return bugIcon;
    case "dark":
      return darkIcon;
    case "dragon":
      return dragonIcon;
    case "electric":
      return electricIcon;
    case "fairy":
      return fairyIcon;
    case "fighting":
      return fightingIcon;
    case "fire":
      return fireIcon;
    case "flying":
      return flyingIcon;
    case "ghost":
      return ghostIcon;
    case "grass":
      return grassIcon;
    case "ground":
      return groundIcon;
    case "ice":
      return iceIcon;
    case "normal":
      return normalIcon;
    case "poison":
      return poisonIcon;
    case "psychic":
      return psychicIcon;
    case "rock":
      return rockIcon;
    case "steel":
      return steelIcon;
    case "water":
      return waterIcon;
    default:
      return null;
  }
};