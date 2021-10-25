import { createAsyncThunk } from '@reduxjs/toolkit';

/** hard wired
 * TODO: to set in config file
 */
const POKEMON_GAME_SERIES_API_ENDPOINT = 'https://www.amiiboapi.com//api/amiibo/?gameseries=Pokemon';
const ANIMAL_CROSSING_GAME_SERIES_API_ENDPOINT = 'https://www.amiiboapi.com//api/amiibo/?gameseries=Animal%20Crossing';
const MARIO_SUPERSTARS_GAME_SERIES_API_ENDPOINT =
  'https://www.amiiboapi.com//api/amiibo/?gameseries=Mario%20Sports%20Superstars';

export const fetchAmiibo = createAsyncThunk('amiibo/fetchAmiibo', async () => {
  const responsePokemon = await fetch(POKEMON_GAME_SERIES_API_ENDPOINT);
  const responseAnimalCrossing = await fetch(ANIMAL_CROSSING_GAME_SERIES_API_ENDPOINT);
  const responseMarioSuperStars = await fetch(MARIO_SUPERSTARS_GAME_SERIES_API_ENDPOINT);
  const dataPokemon = await responsePokemon.json();
  const dataAnimalCrossing = await responseAnimalCrossing.json();
  const dataMarioSuperStars = await responseMarioSuperStars.json();
  const data = {
    pokemon: dataPokemon,
    animalCrossing: dataAnimalCrossing,
    marioSuperStars: dataMarioSuperStars,
  };
  return data;
});
