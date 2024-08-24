import React, { useState } from "react";
import ShoeItem from "./ShoeItem";

function ShoeList(props) {
  let [shoe, showShoeId] = useState(props.data[0]);

  let [isModalOpen, setModalStatus] = useState(false);

  let onClick = (shoeitem) => {
    showShoeId(shoeitem);
    setModalStatus(true);
  
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className="shoeList"
              id={item.id}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                onClick(item);
              }}
            >
              <img src={item.image}></img>
              <h1>{item.name}</h1>
              <p>${item.price}</p>
              <button>Add</button>
            </div>
          );
        })}
      </div>
      <ShoeItem
        modalStatus={isModalOpen}
        setModal={setModalStatus}
        item={shoe}
      ></ShoeItem>
    </div>
  );
}

export default ShoeList;
