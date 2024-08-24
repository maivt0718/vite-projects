import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_participant_name, update_result } from "../redux/slices/diceSlice";
import { updateName } from "../redux/slices/userDlice";

const DiceItem = () => {
  let classBtn =
    "bg-purple-600 rounded text-2xl px-14 py-14 border-green-600 border-8";
  const { dice } = useSelector((state) => state.diceSlice);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center container dice_items">
      <button
        className={`item_a ${classBtn}`}
        onClick={() => {
          dispatch(update_participant_name("A"));
          dispatch(updateName("A"));
        }}
      >
        A
      </button>
      <div className="item_dice flex items-center gap-3">
        <img
          src={`./public/Dice/${dice.dice1}.png`}
          width={50}
          className="img-fluid rounded-top"
          alt=""
        />
        <img
          src={`./public/Dice/${dice.dice2}.png`}
          width={50}
          className="img-fluid rounded-top"
          alt=""
        />
        <img
          src={`./public/Dice/${dice.dice3}.png`}
          width={50}
          className="img-fluid rounded-top"
          alt=""
        />
      </div>
      <button
        className={`item_b ${classBtn}`}
        onClick={() => {
          dispatch(update_participant_name("B"))
          dispatch(updateName("B"));
        }}
      >
        B
      </button>
    </div>
  );
};

export default DiceItem;
