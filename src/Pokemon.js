import React, { useState, useEffect } from "react";



import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";

export default Pokemon;

function Pokemon() {
  const [pokemonName, setPokemonName] = useState();
  const [pokemonID, setPokemonID] = useState();
  const [pokemonType, setPokemonType] = useState();

  function getPokemon() {
    let pokemonID = document.getElementById("pokemonID").value; 
    let options = facade.makeOptions("GET", true)
    fetch("http://localhost:8080/CA3/api/pokemon/"+ pokemonID, options)
      .then((res) => res.json())
      .then((data) => {
        if(data.code != "403") {
          setPokemonName(data.name);
          setPokemonID(data.id);
          let pokemontype = getPokemonTypes(data) ; 
          setPokemonType(pokemontype);
          pokemonfact(); 
        } 
      }, []);
  }

  function pokemonfact() {
    return pokemonName ? (
      <>
        <h1>Pokemon info:</h1>
        <h4>Pokemon ID: {pokemonID}</h4>
        <h4>Pokemon Name: {pokemonName}</h4>
        <h4>Pokemon Type: {pokemonType}</h4>
      </>
    ) : (
      <></>
    );
  }

  return (
    <div className="App">
      <br />
      <input type="number" id="pokemonID" name="pokemonInput" placeholder="Between 1 and 807"></input>
      <button onClick={getPokemon}>Get Pokemon</button>
      {pokemonfact()}
    </div>
  );
}


function getPokemonTypes (data) {
   
  let pokemontype = ""
  for (let i = 0 ; i < Object.keys(data.types).length ; i++) {  
    pokemontype = pokemontype + data.types[i].type.name + ", "
  }
  return  pokemontype

}