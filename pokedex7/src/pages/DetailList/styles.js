import styled from 'styled-components';

export const BackgroundDetail = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: #5c5c5c;
  min-width: 100vhs;
`;

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0px auto;
  justify-content: space-around;
  border-radius: 8px;
  background-color: #9f9f9f;
`;

export const FrontBack = styled.div`
  flex-direction: column;
  div {
    width: 300px;
  }
  img {
    width: 250px;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
`;

export const StatsCard = styled.div`
  display: flex;
  gap: 4px;
`;

export const NameStat = styled.p`
  font-weight: bold;
`;

export const BaseStat = styled.p`
  font-weight: bold;
  color: #ff0000;
`;
