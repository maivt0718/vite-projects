import { createSlice } from '@reduxjs/toolkit'
import data from "../../../../public/dataShoe.json"

const initialState = {
    sliceName: "shoe",
    description: "Shoe description",
    shoes: data
}

const shoeSlice = createSlice({
  name: "shoe",
  initialState,
  reducers: {}
});

export const {} = shoeSlice.actions

export default shoeSlice.reducer