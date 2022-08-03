import { iconeBug } from '../../img/iconeBug.png';
import { iconeDark } from '../../img/iconeDark.png';
import { iconeDragon } from '../../img/iconeDragon.png';
import { iconeEletric } from '../../img/iconeEletric.png';
import { iconeFairy } from '../../img/iconeFairy.png';
import { iconeFighting } from '../../img/iconeFighting.png';
import { iconeFire } from '../../img/iconeFire.png';
import { iconeFlying } from '../../img/iconeFlying.png';
import { iconeGhost } from '../../img/iconeGhost.png';
import { iconeGrass } from '../../img/iconeGrass.png';
import { iconeGround } from '../../img/iconeGround.png';
import { iconeIce } from '../../img/iconeIce.png';
import { iconeNormal } from '../../img/iconeNormal.png';
import { iconePoison } from '../../img/iconePoison.png';
import { iconePsychic } from '../../img/iconePsychic.png';
import { iconeRock } from '../../img/iconeRock.png';
import { iconeSteel } from '../../img/iconeSteel.png';
import { iconeWater } from '../../img/iconeWater.png';

const IconsType = (props) => {
  switch (props.img) {
    case 'grass':
      return { iconeGrass };
    case 'bug':
      return { iconeBug };
    case 'poison':
      return { iconePoison };
    case 'flying':
      return { iconeFlying };
    case 'dark':
      return { iconeDark };
    case 'dragon':
      return { iconeDragon };
    case 'electric':
      return { iconeEletric };
    case 'fairy':
      return { iconeFairy };
    case 'fighting':
      return { iconeFighting };
    case 'fire':
      return { iconeFire };
    case 'ghost':
      return { iconeGhost };
    case 'ground':
      return { iconeGround };
    case 'ice':
      return { iconeIce };
    case 'normal':
      return { iconeNormal };
    case 'psychic':
      return { iconePsychic };
    case 'rock':
      return { iconeRock };
    case 'steel':
      return { iconeSteel };
    case 'water':
      return { iconeWater };
  }
};
export default IconsType;
