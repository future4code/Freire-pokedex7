import pokeLogo from '../../img/pokeLogo.png';
import { RiArrowLeftSLine } from 'react-icons/ri';
import {
  Background,
  Container,
  PokeLogo,
  BotaoSimples,
  BotaoPokedex,
} from './styles';

const Header = () => {
  return (
    <Background>
      <Container>
        <BotaoSimples>
          <p>
            <RiArrowLeftSLine /> Todos Pokémons
          </p>
        </BotaoSimples>
        <PokeLogo src={pokeLogo} />
        <BotaoPokedex>Pokedex</BotaoPokedex>
      </Container>
    </Background>
  );
};

export default Header;
