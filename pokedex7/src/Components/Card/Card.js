import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../constants/baseUrl';
import { PokeContext } from '../Context/PokeContext';
import { useNavigate } from 'react-router-dom';
import { goToDetailPage } from '../../Routes/Coordinator';

// import { IconsType } from "../Card/IconsType";
// import { DetailList } from "../../pages/DetailList/DetailList";

import {
  CardContainer,
  Main,
  TextContainer,
  Types,
  ImageContainer,
  TypeText,
  Button,
} from './style';
import { Pokedex } from '../../pages/Pokedex/Pokedex';

const Card = (props) => {
  const [photo, setPhoto] = useState({});
  const [type, setType] = useState([]);
  const [id, setId] = useState('');
  const [pokemon, setPokemon] = useState({});
  const { pokedex, setPokedex } = useContext(PokeContext);

  const navigate = useNavigate();

  const AddPokemon = () => {
    const newPokedex = [...pokedex, pokemon];
    setPokedex(newPokedex);
    // console.log('funcionou:', pokedex);
  };

  // const DisableAfterClick() => {
  //   const [disable, setDisable] = React.useState(false);

  //   return (
  //     <button disabled={disable} onClick={() => setDisable(true)}>
  //       Click to Disable!
  //     </button>
  //   );
  // }

  const getPokemonCard = () => {
    axios.get(`${BASE_URL}/pokemon/${props.name}`).then((res) => {
      setPhoto(res.data?.sprites?.other?.dream_world?.front_default);
      setType(res.data.types);
      setId(res.data.id);
      setPokemon(res.data);
      // console.log(res.data.sprites.other.home.front);
    });
  };
  // console.log(props.name);

  useEffect(() => {
    getPokemonCard();
  }, []);

  const listTypes = type.map((item, index) => {
    return (
      <TypeText backgroundColor={item.type.name} key={index}>
        {/* <IconsType img={item.type.name} /> */}
        {item.type.name}
      </TypeText>
    );
  });

  return (
    <CardContainer backgroundColor={type[0]?.type?.name}>
      <Main>
        <TextContainer>
          <h3>#{id}</h3>
          <h1>{props.name}</h1>
          <div>{listTypes}</div>
        </TextContainer>
        <ImageContainer>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={props.name}
          />
        </ImageContainer>
      </Main>

      <Button>
        <button
          className="detalhes"
          onClick={() => goToDetailPage(navigate(`/${props.name}`))}
        >
          Detalhes
        </button>
        <button
          onClick={() => {
            setPokedex([...pokedex, props.name]);
            // goToDetailPage(navigate);
            console.log(pokedex);
          }}
          className="capturar"
        >
          Capturar
        </button>
      </Button>
    </CardContainer>
  );
};

export default Card;
