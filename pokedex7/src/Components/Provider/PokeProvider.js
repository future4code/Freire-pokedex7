import { PokeContext } from "../Context/PokeContext";
import { useState } from "react";

const PokeProvider = (props) => {
  const [pokedex, setPokedex] = useState([]);

  return (
    <PokeContext.Provider value={{ pokedex, setPokedex }}>
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
