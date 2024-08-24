import React from "react";
import { useDispatch } from "react-redux";
import { updateName } from "../redux/slices/userDlice";

function DemoRedux() {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>DemoRedux</h1>
      <input 
      type="text" className="border p-2 rounded text-black"
      placeholder="Please input your name"
      onChange={(e) => {
        dispatch(updateName(e.target.value))
      }}
      >
      </input>
    </div>
  );
}

export default DemoRedux;
