
// import React from "react";
// import { PokeContext } from "../Context/PokeContext";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/baseUrl';
import Card from '../Card/Card';
import { Container } from './style';

const PokeCard = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = () => {
    axios.get(`${BASE_URL}/pokemon/`).then((res) => {
      setPokemons(res.data.results);
    });
  };
  useEffect(() => {
    getPokemons();
  }, []);

  const listPokemons = pokemons.map((pokemon) => {
    return <Card key={pokemon.name} name={pokemon.name} />;
  });

  return <Container>{listPokemons}</Container>;
};

export default PokeCard;

