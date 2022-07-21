import styled from 'styled-components';

export const CardContainer = styled.div`
  /* background-color: #0000ff; */
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case 'grass':
        return 'green';
      case 'bug':
        return 'lightgreen';
      case 'poison':
        return 'red';
      case 'flying':
        return 'red';
      case 'dark':
        return 'blue';
      case 'dragon':
        return 'red';
      case 'electric':
        return 'blue';
      case 'fairy':
        return 'red';
      case 'fighting':
        return 'blue';
      case 'fire':
        return 'blue';
      case 'ghost':
        return 'red';
      case 'ground':
        return 'blue';
      case 'ice':
        return 'red';
      case 'normal':
        return 'gray';
      case 'psychic':
        return 'red';
      case 'rock':
        return 'red';
      case 'steel':
        return 'blue';
      case 'water':
        return 'red';
    }
  }};
  width: 440px;
  height: 200px;
  padding: 12px;
  border: none;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

export const Main = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
  width: 200px;
  height: 150px;
  color: #ffffff;
  margin: 0px;
  h1 {
    margin: 0px 0px 8px 0px;
  }
  h3 {
    margin: 0px;
  }
  p {
    margin: 0px;
  }
  div {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
`;

export const TypeText = styled.p`
  padding: 8px 16px;
  background-color: #ff0000;
  border-radius: 4px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  img {
    width: 180px;
    height: 180px;
    position: absolute;
    margin: 0px;
    padding: 0px;
    top: -30px;
    /* right: -250px; */
    left: 40px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto 0px;
  button {
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
  .detalhes {
    background-color: #00000000;
    text-decoration: underline;
    color: #ffffff;
  }
  .capturar {
    background-color: #ffffff;
  }
`;
