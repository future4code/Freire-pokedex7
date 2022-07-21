import { PokeContext } from '../Context/PokeContext';
import { useState } from 'react';
import { BASE_URL } from '../../constants/baseUrl';
import axios from 'axios';
import { useEffect } from 'react';

const PokeProvider = (props) => {
  const [pokedex, setPokedex] = useState([]);
  const [stats, setStats] = useState([]);
  const [image, setImage] = useState({});
  const [moves, setMoves] = useState([]);

  // const [name, setName] = useState([]);
  // const [types, setTypes] = useState([]);
  // const [id, setId] = useState([]);

  const getPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((res) => {
      // setId(res.data.id);
      // setName(res.data.name);
      // setTypes(res.data.types);
      // console.log(res.data.id);
      // console.log(res.data.name);
      // console.log(res.data);
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getDetails = () => {
    axios.get(`${BASE_URL}/pokemon/bulbasaur`).then((res) => {
      setStats(res.data.stats);
      setImage(res.data.sprites);
      setMoves(res.data.moves);
    });
  };

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

        // name,
        // setName,
        // types,
        // setTypes,
        // id,
        // setId
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
