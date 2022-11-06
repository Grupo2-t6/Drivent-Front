import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90%;
  h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
}
`;

export const DaysContainer = styled.div`
  display: flex;
  margin-bottom:44px;
  margin-top: 24px;
`;

export const Trails = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  `;

export const TrailStyle = styled.div`
  display: flex;
  width: 33.33%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  font-size: 17px;
  border: 5px;
  h4{
    color: #7B7B7B;
  }
`;

export const ActivitiesStyled = styled.div`
  margin-top: 13px;
  border: ridge;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

export const DayStyle = styled.div`
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  width: 131px;
  height: 37px;
  margin: 17px;
  background-color: ${(props) => props.background};
  font-size: 14px;
`;
