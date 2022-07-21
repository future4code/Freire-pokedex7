import { PokeContext } from "../Context/PokeContext";
import { useState } from "react";
import { BASE_URL } from "../../constants/baseUrl";
import axios from "axios";
import { useEffect } from "react";

const PokeProvider = (props) => {
  const [pokedex, setPokedex] = useState([]);
  const [stats, setStats] = useState([]);
  const [image, setImage] = useState({});
  const [moves, setMoves] = useState([]);


  const getDetails = () => {
    axios.get(`${BASE_URL}/pokemon/bulbasaur`).then((res) => {
      setStats(res.data.stats);
      setImage(res.data.sprites);
      setMoves(res.data.moves);
      //   console.log(res.data.moves.length);
      //   console.log(res.data.moves);
    });
  };
  //   console.log(image);

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        pokedex,
        setPokedex,
        stats,
        setStats,
        image,
        setImage,
        moves,
        setMoves,
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
