import React from "react";
import { Link } from "react-router-dom";

const ItemShoe = ({image, price, name, id}) => {
  return (
    <div key={id}>
      <h2>Demo Use Effect</h2>
      <div className="grid grid-cols-4 gap-1">
        <div key={id} className="text-black">
          <img src={image}></img>
          <h3>{name}</h3>
          <p className="text-black">Price: {price}</p>
          <Link to={`/useEffectDetails/${id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemShoe;
