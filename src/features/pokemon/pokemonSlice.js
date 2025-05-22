import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemon: [],
  pokeList: [0, 0, 0, 0, 0, 0],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setPokeList: (state, action) => {
      state.pokeList = action.payload;
    },
    addToPokeList: (state, action) => {
      const newPokemon = action.payload;
      if (state.pokeList[5] !== 0) return;

      if (state.pokeList.some((p) => p !== 0 && p.id === newPokemon.id)) return;

      const idx = state.pokeList.findIndex((p) => p === 0);
      if (idx !== -1) state.pokeList[idx] = newPokemon;
    },
    removeFromPokeList: (state, action) => {
      const deleteId = action.payload.id;
      const filtered = state.pokeList.filter(
        (p) => p !== 0 && p.id !== deleteId
      );
      state.pokeList = [...filtered, ...Array(6 - filtered.length).fill(0)];
    },
  },
});

export const { setPokemon, setPokeList, addToPokeList, removeFromPokeList } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
