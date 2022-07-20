import Header from "./Components/Header/Header";
import React from "react";
import { Router } from "./Routes/Router";
import PokeProvider from "./Components/Provider/PokeProvider";

function App() {
  return (
    <PokeProvider>
      <Header />
      <Router />
    </PokeProvider>
  );
}

export default App;
