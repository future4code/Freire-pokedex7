import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/baseUrl';
import { Link, useParams } from 'react-router-dom';
import { PokeContext } from '../../Components/Context/PokeContext';
import Header from '../../Components/Header/Header';
import {
  BackgroundDetail,
  Container,
  FrontBack,
  Stats,
  StatsCard,
  NameStat,
  BaseStat,
} from './styles';
import { Background } from '../../Components/Header/styles';

export const DetailList = () => {
  const pathParams = useParams();
  const poke = pathParams.poke;
  const [image, setImage] = useState();
  const [stats, setStats] = useState([]);
  const [id, setId] = useState('');
  console.log(poke);

  // const { stats, image, moves, order } = useContext(PokeContext);

  const getDetails = () => {
    axios.get(`${BASE_URL}/pokemon/${poke}`).then((res) => {
      setStats(res.data.stats);
      setId(res.data.id);
      // setImage(
      //   res.data.sprites.versions['generation-v']['black-white'].animated
      //     .front_default
      // );
      console.log(res.data);
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  // console.log(order);
  const renderStats = stats.map((pokemon, index) => {
    return (
      <StatsCard key={index}>
        <NameStat>{pokemon.stat.name}:</NameStat>
        <BaseStat>{pokemon.base_stat}</BaseStat>
      </StatsCard>
    );
  });

  // const renderMoves = moves.map((item) => {
  //   return <p>{item.move.name}</p>;
  // });

  return (
    <div>
      <Header />

      <BackgroundDetail>
        <Container>
          <FrontBack>
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt=""
              />
            </div>
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
                alt=""
              />
            </div>
          </FrontBack>
          <Stats>{renderStats}</Stats>

          <div>
            {/* <img src={image.other.dream_world.front_default} /> */}

            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt=""
            />

            {/* <p>{renderMoves(moves)}</p> */}
          </div>
        </Container>
      </BackgroundDetail>

      {/* <div>
        <img src={image.other.official-artwork.front_default} />
      </div> */}
    </div>
  );
};
