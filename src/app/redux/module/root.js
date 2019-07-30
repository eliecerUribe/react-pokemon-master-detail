import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import pokemons, { fetchPokemonsEpic, fetchPokemonEpic } from './pokemon';

export const rootEpic = combineEpics(
  fetchPokemonsEpic,
  fetchPokemonEpic
);

export const rootReducer = combineReducers({
  pokemons
});