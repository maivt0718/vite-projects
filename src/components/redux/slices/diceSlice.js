import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    participant_name: "A",
    winner: "A",
    goal_mark: 0,
    total: 0,
    dice: {
        dice1: 1,
        dice2: 1,
        dice3: 1
    }
}

const diceSlice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    update_participant_name: (state, actions) => {
        state.participant_name=actions.payload
    },
    update_number_of_goals: (state, actions) => {
        state.number_of_goals=actions.payload
    },
    update_result: (state, actions) => {

        let dice1 = Math.floor(Math.random() * 6 + 1)
        let dice2 = Math.floor(Math.random() * 6 + 1)
        let dice3 = Math.floor(Math.random() * 6 + 1)
        state.dice = { ...state.dice, dice1, dice2, dice3 }

        state.total+=1;
        let result = dice1 + dice2 + dice3;
        console.log(result)

        if (result > state.goal_mark) {
            state.winner = actions.payload;
            state.goal_mark = result
        }

        if (result < state.goal_mark) {
            state.winner = "You lost";
        }

    }
  }
});

export const { update_participant_name, update_number_of_goals, update_result  } = diceSlice.actions

export default diceSlice.reducer