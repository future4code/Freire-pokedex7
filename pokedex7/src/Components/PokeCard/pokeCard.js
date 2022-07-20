import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/baseUrl';

const PokeCard = () => {
  const [todosPokemons, setTodosPokemons] = useState([]);

  const getPokemons = () => {
    axios.get(`${BASE_URL}/pokemon/`).then((res) => {
      setTodosPokemons(res.data.results);
      // console.log(res.data);
    });
  };
  useEffect(() => {
    getPokemons();
  }, []);

  const mudaPokemon = todosPokemons.map((pokemon, index) => {
    return <p key={index}>{index + 1}</p>;
  });
  const getPokemonsByName = (index) => {
    axios.get(`${BASE_URL}/pokemon/${mudaPokemon}`).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(() => {
    getPokemonsByName();
  }, []);


  return (
    <div>
      <h1>{todosPokemons.name}</h1>
      {/* {renderPokemons} */}
      {mudaPokemon}
    </div>
  );
};

export default PokeCard;
