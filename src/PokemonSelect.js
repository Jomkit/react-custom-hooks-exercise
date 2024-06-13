import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, reset, pokemon = pokemonList }) {
  const BASEURL = `https://pokeapi.co/api/v2/pokemon/`;
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => add(BASEURL, `${pokemon[pokeIdx]}/`)}>Catch one!</button>
      <button onClick={() => add(BASEURL, `${choice(pokemon)}`)}>I'm feeling lucky</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default PokemonSelect;
