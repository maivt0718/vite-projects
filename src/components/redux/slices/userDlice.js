import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    userName: "Hana"
}

const userDlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    updateName: (state, action) => {
        // console.log(action.payload);
        // console.log(current(state))
        state.userName = action.payload
    }
  }
});

export const { updateName } = userDlice.actions

export default userDlice.reducer