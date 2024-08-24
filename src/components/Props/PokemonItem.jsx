import React from "react";
import { Link } from "react-router-dom";

function PokemonItem({pokemon}) {
    // console.log(pokemon);
  return (
    <div>
      <img src={pokemon ? pokemon.url : "undefined"}></img>
      { pokemon && (
      <p className="text-black">{pokemon ?.description}</p>)}
      <Link className="bg-black p-1 my-3" to={`/shoe_details/${pokemon.id}`}>Details</Link>
    </div>
  );
}

export default PokemonItem;
