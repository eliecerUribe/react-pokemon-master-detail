import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import pokemons, { fetchPokemonsEpic, fetchPokemonEpic, favPokemonEpic } from './pokemon';

export const rootEpic = combineEpics(
  fetchPokemonsEpic,
  fetchPokemonEpic,
  favPokemonEpic
);

export const rootReducer = combineReducers({
  pokemons
});