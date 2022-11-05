import styled from 'styled-components';
import { useEffect, useState } from 'react';

const nameActiv = 'Minecraft: montando o PC ideal';
const initTime = 9.00;
const endTime = 11.00;

export default function SelectActivities() {
  const [dayTrial, setDayTrial] = useState('');

  function Day({ day, setDayTrial, dayTrial }) {
    let picked = false;
    if(dayTrial===day) {
      picked=true;
    };
    return(
      <DayStyle onClick={() => setDayTrial(day)} background={picked ? '#FFEED2' : '#E0E0E0'}>
        <h4>{day}</h4>
      </DayStyle>
    );
  };

  function Activitie() {
    const [confirm, setConfirm] = useState(false);
    const deltaTime = (endTime-initTime);
    return(
      <ActivitieStyled onClick={() => setConfirm(!confirm)} background={confirm ? '#D0FFDB' : '#E0E0E0'} heigth={80*deltaTime}>
        <h5>{nameActiv}</h5> 
        <h6>{initTime}-{endTime}</h6>        
      </ActivitieStyled>
    );
  };

  function Trail({ trail }) {
    return(
      <TrailStyle onClick={(trail) => console.log('trail')}>
        <h4>{trail}</h4>
        <ActivitiesStyled>
          <Activitie/>
        </ActivitiesStyled>
      </TrailStyle>
    );
  };
  
  const picked = false;
  return (
    <Container>
      <h1>Escolha de atividades</h1>
      <DaysContainer>
        <Day day = 'Sexta, 22/10' setDayTrial={setDayTrial} dayTrial={dayTrial}/>
        <Day day = 'Sábado, 23/10' setDayTrial={setDayTrial} dayTrial={dayTrial}/>
        <Day day = 'Domingo, 24/10' setDayTrial={setDayTrial} dayTrial={dayTrial}/>
      </DaysContainer>
      <Trails>
        <Trail trail = 'Auditório Principal'/>
        <Trail trail = 'Auditório Lateral'/>
        <Trail trail = 'Sala de Workshop'/>
      </Trails>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 85%;
  h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
}
`;

const DaysContainer = styled.div`
  display: flex;
  margin-bottom:44px;
  margin-top: 24px;
`;

const Trails = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  `;

const TrailStyle = styled.div`
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

const ActivitiesStyled = styled.div`
  margin-top: 13px;
  border: ridge;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const ActivitieStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  border-radius: 5px;
  height: ${props => props.heigth}px;
  margin-top: 10px;
  background-color: #F1F1F1;
  font-family: 'Roboto';
  background-color: ${(props) => props.background};
  
  h5{
    margin-top: 12px;
    margin-left: 4px;
    font-size: 12px;
    font-weight: 700;
  }
  h6{
    margin-top: 6px;
    margin-left: 4px;
    font-size: 12px;
  }
  `;

const DayStyle = styled.div`
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
