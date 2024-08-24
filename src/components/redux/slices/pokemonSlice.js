import { createSlice } from "@reduxjs/toolkit"
import data from "../../../../public/imgs/pokemon.json"


const initState = {
    value: "Pikachu",
    description: "pikachu-description",
    type: "attack",
    pokemons: data
}

const pokemonSlice = createSlice({
    name: "pikachu",
    initialState: initState,
    reducers: {},
})

export default pokemonSlice.reducer;