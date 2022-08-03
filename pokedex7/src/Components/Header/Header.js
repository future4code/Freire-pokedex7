import pokeLogo from '../../img/pokeLogo.png';
import { RiArrowLeftSLine } from 'react-icons/ri';
import {
  Background,
  Container,
  PokeLogo,
  BotaoSimples,
  BotaoPokedex,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { goToPokedex, goToHome } from '../../Routes/Coordinator';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <BotaoSimples onClick={() => goToHome(navigate)}>
          <p>
            <RiArrowLeftSLine /> Todos Pokémons
          </p>
        </BotaoSimples>
        <PokeLogo src={pokeLogo} />
        <BotaoPokedex onClick={() => goToPokedex(navigate)}>
          Pokedex
        </BotaoPokedex>
      </Container>
    </Background>
  );
};

export default Header;
