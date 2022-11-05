import styled from 'styled-components';

const nameActiv = 'Minecraft: montando o PC ideal';
const initTime = 'initTime';
const endTime = 'endTime';

export default function Activities() {
  function Day({ day }) {
    return(
      <DayStyle onClick={(day) => console.log('day')}>
        <h4>{day}</h4>
      </DayStyle>
    );
  };

  function Activitie() {
    return(
      <ActivitieStyled onClick={(day) => console.log('day')}>
        <h5>{nameActiv}</h5> 
        <h6>{initTime}-{endTime}</h6>        
      </ActivitieStyled>
    );
  };

  function Trail({ trail }) {
    console.log('trail');
    return(
      <TrailStyle onClick={(trail) => console.log('trail')}>
        <h4>{trail}</h4>
        <ActivitiesStyled>
          <Activitie/>
        </ActivitiesStyled>
      </TrailStyle>
    );
  };

  return (
    <Container>
      <h1>Escolha de atividades</h1>
      <DaysContainer>
        <Day day = 'Sexta, 22/10' />
        <Day day = 'Sábado, 23/10' />
        <Day day = 'Domingo, 24/10' />
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
  height: 80px;
  margin-top: 10px;
  background-color: #F1F1F1;
  font-family: 'Roboto';
  
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
  background-color: #E0E0E0;
  font-size: 14px;
`;
