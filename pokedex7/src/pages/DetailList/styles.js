import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0px auto;
  justify-content: space-around;
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
  width: 300px;
  justify-content: center;
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
