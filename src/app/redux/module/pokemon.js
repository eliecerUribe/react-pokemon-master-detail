export * from '../epics';

// Actions
import {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
  GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE
} from '../../constants/actionNames';

const INITIAL_STATE = {
  pokemons: [],
  isLoading: false,
  error: false,
  foundPokemon: {}
};

// Reducer
const pokemons = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, isLoading: true, error: null };
    case GET_POKEMONS_SUCCESS:
      return { pokemons: [...action.payload], isLoading: false, error: null };
    case GET_POKEMONS_FAILURE:
      return { pokemons: [], isLoading: false, error: action.payload };
    case GET_POKEMON:
      return { ...state, isLoading: true, error: null };
    case GET_POKEMON_SUCCESS:
      return { ...state, foundPokemon: {...action.payload}, isLoading: false, error: null };
    case GET_POKEMON_FAILURE:
      return { ...state, foundPokemon: {}, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default pokemons;

// Action Creators
export const fetchPokemons = () => ({
  type: GET_POKEMONS
});

export const fetchPokemonsSuccess = pokemons => ({
  type: GET_POKEMONS_SUCCESS,
  payload: pokemons
});

export const fetchPokemonsFailure = message => ({
  type: GET_POKEMONS_FAILURE,
  payload: message
});

export const fetchPokemon = (pokemon) => ({
  type: GET_POKEMON,
  payload: pokemon
});

export const fetchPokemonSuccess = pokemon => ({
  type: GET_POKEMON_SUCCESS,
  payload: pokemon
});

export const fetchPokemonFailure = message => ({
  type: GET_POKEMONS_FAILURE,
  payload: message
});