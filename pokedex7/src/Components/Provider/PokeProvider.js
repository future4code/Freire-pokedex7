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
<<<<<<< HEAD
  // const [name, setName] = useState([]);
  // const [types, setTypes] = useState([]);
  // const [id, setId] = useState([]);


  const getPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
    .then((res) => {
      // setId(res.data.id);
      // setName(res.data.name);
      // setTypes(res.data.types);
      // console.log(res.data.id);
      // console.log(res.data.name);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

=======


>>>>>>> f78896085900c20fde737bfbecd02b103c0c57d0
  const getDetails = () => {
    axios.get(`${BASE_URL}/pokemon/bulbasaur`).then((res) => {
      setStats(res.data.stats);
      setImage(res.data.sprites);
      setMoves(res.data.moves);
<<<<<<< HEAD
        // console.log(res.data.name);
=======
      //   console.log(res.data.moves.length);
>>>>>>> f78896085900c20fde737bfbecd02b103c0c57d0
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
<<<<<<< HEAD
        // name,
        // setName,
        // types,
        // setTypes,
        // id,
        // setId
=======
>>>>>>> f78896085900c20fde737bfbecd02b103c0c57d0
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
