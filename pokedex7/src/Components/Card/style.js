import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #0000ff;
  width: 350px;
  height: 250px;
  padding: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

export const Main = styled.div`
  display: flex;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h1 {
    margin: 0px;
  }
  h3 {
    margin: 0px;
  }
  p {
    margin: 0px;
  }
`;

export const TypeText = styled.p`
  padding: 8px 16px;
  background-color: #ff0000;
  border-radius: 4px;
`

export const ImageContainer = styled.div`
display: flex;
flex-direction: column-reverse;
position: relative;
  img {
    width: 180px;
    position: absolute;
    top: -50px;
    right: -250px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto 0px;
`