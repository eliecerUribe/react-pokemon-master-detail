import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import pokemons, { fetchPokemonsEpic } from './pokemon';

export const rootEpic = combineEpics(
  fetchPokemonsEpic
);

export const rootReducer = combineReducers({
  pokemons
});