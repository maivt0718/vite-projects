import React from "react";
import PokemonItem from "./PokemonItem";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";

function PropsDemo() {
  const input = useInput("pokemon");
  console.log(input)
  const {pokemons} = useSelector((state) => {
    return state.pokemonSlice
  })
  return (
    <div className="pokemon_parent">
      <div className="container">
        Bai tap hien thi pokemon
        <div className="grid grid-cols-5 gap-10">
          {pokemons.map((item, index) => {
            return (
              <PokemonItem key={index} pokemon={item}></PokemonItem>
            );
          })}
        </div>
      </div>
      <div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Account</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder="" {...input} />
          <small id="helpId" className="form-text text-muted">Please input your account</small>
        </div>
      </div>
    </div>
  );
}

export default PropsDemo;
