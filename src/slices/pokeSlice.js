import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { guardarEnLocalStorage, leerDeLocalStorage } from "../utils/localstorage";

const initialState = {
  pokemons: [],
  status: "idle",
  error: null,
  poke: {
    id: "",
    name: "",
    order: "",
    weight: "",
    height: "",
    sprites: {
      front_default: "",
      back_default: "",
    },
    types: [],
    base_experience: "",
    species: {
      name: "",
      url: "",
      description: "",
    },
  },
  favoritos: leerDeLocalStorage("favoritos") || [],
}

export const getPokemons = createAsyncThunk("pokemons/getPokemons", async () => {
  const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
  const pokemons = await Promise.all(respuesta.data.results.map(async (pokemon) => {
    const pokemonData = await axios.get(pokemon.url);
    return {
      id: pokemonData.data.id,
      name: pokemonData.data.name,
      imageUrl: pokemonData.data.sprites.front_default,
      types: pokemonData.data.types.map((type) => type.type.name),
    };
  }));
  return pokemons;
});

export const getPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (name) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const speciesUrl = response.data.species.url;
    const speciesResponse = await axios.get(speciesUrl);
    const descriptionEntry = speciesResponse.data.flavor_text_entries.find(
      (entry) => entry.language.name === "es"
    );
    const pokemon = {
      ...response.data,
      species: {
        name: speciesResponse.data.name,
        url: speciesUrl,
        description: descriptionEntry ? descriptionEntry.flavor_text : "",
      },
    };

    return pokemon;
  }
);

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    agregarEnFavorito: (state, action) => {
      const nuevoFavorito = state.pokemons.find(pokemon => pokemon.id === action.payload);
      if (nuevoFavorito && !state.favoritos.some(favorite => favorite.id === nuevoFavorito.id)) {
        state.favoritos.push(nuevoFavorito);
        guardarEnLocalStorage({ key: "favoritos", value: state.favoritos });
      }
    },
    removerDeFavorito: (state, action) => {
      state.favoritos = state.favoritos.filter(favorite => favorite.id !== action.payload);
      guardarEnLocalStorage({ key: "favoritos", value: state.favoritos });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.status = "Cargando";
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = "Exitoso";
        state.pokemons = action.payload;
      })
      .addCase(getPokemons.rejected, (state, action) => {
        state.status = "Rechazado";
        state.error = action.error.message;
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.status = "Exitoso";
        state.poke = action.payload;
      })
  },
});

export const { agregarEnFavorito, removerDeFavorito } = pokemonSlice.actions;

export default pokemonSlice.reducer;
