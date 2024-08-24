import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './slices/pokemonSlice';
import phoneSlice from './slices/phoneSlice';
import shoeSlice from './slices/shoeSlice';
import userDlice from './slices/userDlice';
import diceSlice from './slices/diceSlice';


export const store = configureStore({
  reducer: {
    hoTen: () => {
        return "Hana";
    },
    pokemonSlice,
    phoneSlice,
    shoeSlice,
    userDlice,
    diceSlice
  },
})

