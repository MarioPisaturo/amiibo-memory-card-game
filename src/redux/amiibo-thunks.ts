import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAmiibo = createAsyncThunk('amiibo/fetchAmiibo', async () => {
  const responsePokemon = await fetch('https://www.amiiboapi.com//api/amiibo/?gameseries=Pokemon');
  const responseAnimalCrossing = await fetch('https://www.amiiboapi.com//api/amiibo/?gameseries=Animal%20Crossing');
  const responseMarioSuperStars = await fetch(
    'https://www.amiiboapi.com//api/amiibo/?gameseries=Mario%20Sports%20Superstars'
  );
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
