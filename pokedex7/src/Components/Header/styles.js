import styled from 'styled-components';

export const Background = styled.div`
  /* background-color: #4c4c4c; */
`;

export const Container = styled.div`
  /* background-color: #4c4c4c; */
  box-sizing: border-box;
  max-width: 1280px;
  padding: 8px 16px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: bold;
    text-decoration: underline;
  }
`;
export const BotaoSimples = styled.button`
  background-color: #00000000;
  border: none;
  padding: 8px 16px;
  p {
    margin: 0px;
  }
`;

export const PokeLogo = styled.img`
  max-width: 100%;
  width: 300px;
`;

export const BotaoPokedex = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  color: #ffffff;
  background-color: #0077b6;
`;
