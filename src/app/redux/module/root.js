import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import pokemons, {
  fetchPokemonsEpic,
  fetchPokemonEpic,
  favPokemonEpic,
  removePokemonEpic
} from './pokemon';

export const rootEpic = combineEpics(
  fetchPokemonsEpic,
  fetchPokemonEpic,
  favPokemonEpic,
  removePokemonEpic
);

export const rootReducer = combineReducers({
  pokemons
});
