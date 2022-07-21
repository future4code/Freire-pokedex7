import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../../constants/baseUrl";
import { PokeContext } from "../Context/PokeContext";
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
} from "./style";

const Card = (props) => {
  const [photo, setPhoto] = useState({});
  const [type, setType] = useState([]);
  const [order, setOrder] = useState("");
  const { pokedex, setPokedex } = useContext(PokeContext);

  const AddPokemon = (pokemon) => {
    const newArray = [...pokedex, pokemon];
    setPokedex(newArray);
    console.log("funcionou");
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
      setPhoto(res.data.sprites.other.dream_world.front_default);
      setType(res.data.types);
      setOrder(res.data.order);
      console.log(res.data);
    });
  };

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
          <h3>#{order}</h3>
          <h1>{props.name}</h1>
          <div>{listTypes}</div>
        </TextContainer>
        <ImageContainer>
          <img src={photo} alt={props.name}/>
        </ImageContainer>
      </Main>

      <Button>
        <button className="detalhes">Detalhes</button>
        <button onClick={() => AddPokemon()} className="capturar">
          Capturar
        </button>
      </Button>
    </CardContainer>
  );
};

export default Card;
