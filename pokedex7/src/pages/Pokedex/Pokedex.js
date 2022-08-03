import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import { PokeContext } from '../../Components/Context/PokeContext';
import Header from '../../Components/Header/Header';
import { Container, Background } from './style';
import { BASE_URL } from '../../constants/baseUrl';
// import {pokeCard} from "../../Components/PokeCard/pokeCard";
// import { goToDetailPage } from "../../Routes/Coordinator";

export const Pokedex = () => {
  const { pokedex } = useContext(PokeContext);
  console.log(pokedex);

  const renderPokedex = pokedex.map((pokemon) => {
    return (
      <div key={pokemon}>
        <Card name={pokemon} />
      </div>
    );
  });

  return (
    <div>
      <Header />
      <Background>
        <Container>{renderPokedex}</Container>
      </Background>
    </div>
  );
};
