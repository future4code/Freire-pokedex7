import React from 'react';
import styled from 'styled-components';
import PokeCard from '../../Components/PokeCard/pokeCard';
import Header from '../../Components/Header/Header';

const HomePage = styled.div`
  color: #ffffff;
  background-color: #5e5e5e;
  padding: 0px;
`;

export const Home = () => {
  return (
    <HomePage>
      <Header />
      <PokeCard />
    </HomePage>
  );
};
