export * from '../epics';

// Actions
import {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE
} from '../../constants/actionNames';

const INITIAL_STATE = {
  pokemons: [],
  isLoading: false,
  error: false
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