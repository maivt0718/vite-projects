import React from "react";
import DiceItem from "./DiceItem";
import DiceResult from "./DiceResult";
import { useDispatch, useSelector } from "react-redux";
import { update_result } from "../redux/slices/diceSlice";

function Dice() {
  const {participant_name} = useSelector((state) => state.diceSlice)
  const dispatch = useDispatch()
  return (
    <div className="dice h-screen space-y-5 py-5">
      <h1>Dice Game</h1>
      <div className="dice_components">
        <DiceItem/>
        <DiceResult/>
        <button className="bg-green-600 text-white py-1 px-3 rounded" onClick={() => {
          dispatch(update_result(participant_name))
        }}>Play</button>
      </div>
    </div>
  );
}

export default Dice;
