import Header from './Components/Header/Header';
import React from 'react';
import { Router } from './Routes/Router';
import PokeProvider from './Components/Provider/PokeProvider';
import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0px;
}
`;

function App() {
  return (
    <PokeProvider>
      <GlobalStyled />
      {/* <Header /> */}
      <Router />
    </PokeProvider>
  );
}

export default App;
