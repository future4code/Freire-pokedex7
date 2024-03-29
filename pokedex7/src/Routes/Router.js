import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Pokedex } from '../pages/Pokedex/Pokedex';
import { DetailList } from '../pages/DetailList/DetailList';
import { Home } from '../pages/Home/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/details/:poke" element={<DetailList />} />
        <Route path="/pokedex/details/:poke" element={<DetailList />} />
      </Routes>
    </BrowserRouter>
  );
};
