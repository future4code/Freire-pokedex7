import React from 'react';
import styled from 'styled-components';
import PokeCard from '../../Components/PokeCard/pokeCard';
import Header from '../../Components/Header/Header'

const HomePage = styled.div`
  color: #FFFFFF;
  background-color: #5E5E5E;
  padding: 12px;  
`

export const Home = () => {
  return (
    <HomePage>
      <Header/>
      <h1>Todos os Pokemons</h1>     
      <PokeCard />
    </HomePage>
  );
};
