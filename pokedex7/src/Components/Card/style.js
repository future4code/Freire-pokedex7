import styled from 'styled-components';

export const CardContainer = styled.div`
  /* background-color: #0000ff; */
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case 'grass':
        return '#729F92';
      case 'bug':
        return '#76A866';
      case 'poison':
        return 'red';
      case 'flying':
        return 'red';
      case 'dark':
        return 'blue';
      case 'dragon':
        return '#729F92';
      case 'electric':
        return 'blue';
      case 'fairy':
        return 'red';
      case 'fighting':
        return 'blue';
      case 'fire':
        return '#EAAB7D';
      case 'ghost':
        return 'red';
      case 'ground':
        return 'blue';
      case 'ice':
        return 'red';
      case 'normal':
        return '#BF9762';
      case 'psychic':
        return 'red';
      case 'rock':
        return 'red';
      case 'steel':
        return 'blue';
      case 'water':
        return '#71C3FF';
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
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case 'grass':
        return '#70B873';
      case 'bug':
        return '#316520';
      case 'poison':
        return '#AD61AE';
      case 'flying':
        return '#6892B0';
      case 'dark':
        return '#5C5365';
      case 'dragon':
        return '#0A6CBF';
      case 'electric':
        return '#F4D23B';
      case 'fairy':
        return '#EC8FE6';
      case 'fighting':
        return '#CE4069';
      case 'fire':
        return '#F44900';
      case 'ghost':
        return '#5269AC';
      case 'ground':
        return '#D97745';
      case 'ice':
        return '#74CEC0';
      case 'normal':
        return '#8A8A8A';
      case 'psychic':
        return '#F67176';
      case 'rock':
        return '#C7B78B';
      case 'steel':
        return '#BBBBBB';
      case 'water':
        return '#33A4F5';
    }
  }};
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
