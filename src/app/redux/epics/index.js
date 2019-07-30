import { ajax } from 'rxjs/ajax';
import { mergeMap, map, of, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { GET_POKEMONS, GET_POKEMON } from '../../constants/actionNames';
import {
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
  fetchPokemonSuccess,
  fetchPokemonFailure
} from '../module/pokemon';

const URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemonsEpic = action$ => {
  return action$.pipe(
    ofType(GET_POKEMONS),
    mergeMap(() => {
      return ajax.getJSON(`${URL}/?limit=10`).pipe(
        map(response => fetchPokemonsSuccess(response.results)),
        catchError(error => of(fetchPokemonsFailure(error.message)))
      );
    })
  );
};

export const fetchPokemonEpic = action$ => {
  return action$.pipe(
    ofType(GET_POKEMON),
    mergeMap(action => {
      return ajax.getJSON(`${URL}/${action.payload}`).pipe(
        map(response => fetchPokemonSuccess(response)),
        catchError(error => of(fetchPokemonFailure(error.message)))
      );
    })
  );
};
