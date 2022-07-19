import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/baseUrl';
import { Link } from 'react-router-dom';
import {
  Container,
  FrontBack,
  Stats,
  StatsCard,
  NameStat,
  BaseStat,
} from './styles';

export const DetailList = () => {
  const [stats, setStats] = useState([]);
  const [image, setImage] = useState({});
  const [moves, setMoves] = useState([]);

  const getDetails = () => {
    axios.get(`${BASE_URL}/pokemon/bulbasaur`).then((res) => {
      setStats(res.data.stats);
      setImage(res.data.sprites);
      setMoves(res.data.moves);
      //   console.log(res.data.moves.length);
      //   console.log(res.data.moves);
    });
  };
  //   console.log(image);

  useEffect(() => {
    getDetails();
  }, []);

  const renderStats = stats.map((pokemon, index) => {
    return (
      <StatsCard key={index}>
        <NameStat>{pokemon.stat.name}:</NameStat>
        <BaseStat>{pokemon.base_stat}</BaseStat>
      </StatsCard>
    );
  });

  //   const renderMoves = moves.map((item) => {
  //     return <p>{item.move.name}</p>;
  //   });

  const renderMoves = (array) => {
    for (let i = 0; i < 4; i++) {
      console.log(array[i].move.name);
    }
  };

  return (
    <div>
      <Link to={'/'}>
        <button>Voltar</button>
      </Link>
      <p>Aqui vao aparecer os detalhes de pokemon em questao</p>
      <Container>
        <FrontBack>
          <div>
            <img src={image.front_default} />
          </div>
          <div>
            <img src={image.back_default} />
          </div>
        </FrontBack>
        <Stats>{renderStats}</Stats>
        <div>
          {/* <img src={image.other.dream_world.front_default} /> */}
          <p>{renderMoves(moves)}</p>
        </div>
      </Container>
      {/* <div>
        <img src={image.other.official-artwork.front_default} />
      </div> */}
    </div>
  );
};
