import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/baseUrl';
import {
  CardContainer,
  Main,
  TextContainer,
  Types,
  ImageContainer,
  TypeText,
  Button,
} from './style';

const Card = (props) => {
  const [photo, setPhoto] = useState({});
  const [type, setType] = useState([]);
  const [order, setOrder] = useState('');

  const getPokemonCard = () => {
    axios.get(`${BASE_URL}/pokemon/${props.name}`).then((res) => {
      console.log(res.data);
      setPhoto(res.data.sprites.other.dream_world.front_default);
      setType(res.data.types);
      setOrder(res.data.order);
    });
  };

  useEffect(() => {
    getPokemonCard();
  }, []);

  const listTypes = type.map((item, index) => {
    return <TypeText key={index}>{item.type.name}</TypeText>;
  });

  return (
    <CardContainer>
      <Main>
        <TextContainer>
          <h3>#{order}</h3>
          <h1>{props.name}</h1>
          <div>{listTypes}</div>
        </TextContainer>
        <ImageContainer>
          <img src={photo} />
        </ImageContainer>
      </Main>

      <Button>
        <button className="detalhes">Detalhes</button>
        <button className="capturar">Capturar</button>
      </Button>
    </CardContainer>
  );
};

export default Card;