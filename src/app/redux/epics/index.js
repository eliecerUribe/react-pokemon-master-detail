import { ajax } from 'rxjs/ajax';
import { mergeMap, map, of, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { GET_POKEMONS } from '../../constants/actionNames';
import { fetchPokemonsSuccess, fetchPokemonsFailure } from '../module/pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

export const fetchPokemonsEpic = action$ => {
  return action$.pipe(
    ofType(GET_POKEMONS),
    mergeMap(() => {
      return ajax.getJSON(url).pipe(
        map(response => fetchPokemonsSuccess(response.results)),
        catchError(error => of(fetchPokemonsFailure(error)))
      );
    })
  );
}
