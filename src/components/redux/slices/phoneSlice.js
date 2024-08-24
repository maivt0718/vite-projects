import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    phoneName: "pro max",
    price: "$345",
    label: "Apple"
}

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {}
});

export const {} = phoneSlice.actions

export default phoneSlice.reducer