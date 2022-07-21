import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/baseUrl';
import { CardContainer, Main, TextContainer, ImageContainer, TypeText, Button } from './style';

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

  const listTypes = type.map((item) => {
    return <TypeText>{item.type.name}</TypeText>;
  });

  return (
    <CardContainer>
      <Main>
        <TextContainer>
        <h3>#{order}</h3>
        <h1>{props.name}</h1>
        {listTypes}
      </TextContainer>

      <ImageContainer>
        <img src={photo} />
      </ImageContainer>
      </Main>
      
      <Button>
        <button>Teste</button>
      <button>Teste</button>
      </Button>
      
    </CardContainer>
  );
};

export default Card;
