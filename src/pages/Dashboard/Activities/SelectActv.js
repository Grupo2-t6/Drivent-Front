
import { useState } from 'react';
import Activitie from '../../../components/Activities';
import Day from '../../../components/Activities/SelectDay';
import{ Container, DaysContainer, Trails, TrailStyle, ActivitiesStyled, DayStyle } from './Styled';

const daysEvent = ['Sexta, 22/10', 'Sábado, 23/10', 'Domingo, 24/10'];

const trialsEvent = ['Auditório Principal', 'Auditório Lateral', 'Sala de Workshop'];

const actvesInit = {
  activitiesPrincipal: [],
  activitiesLateral: [],
  activitiesWorkshop: [],
};

export default function SelectActivities() {
  const [dayTrial, setDayTrial] = useState('Sexta, 22/10');
  const [actvesGet, setActvesGet] = useState(actvesInit);
  
  function Trail({ allTrail, trail }) {
    console.log(allTrail);
    return(
      <TrailStyle onClick={(trail) => console.log('trail')}>
        <h4>{trail}</h4>
        <ActivitiesStyled>
          {
            allTrail.activitiesPrincipal.map((value, index) => <Activitie value={value} key={index}/>)
          }
        </ActivitiesStyled>
      </TrailStyle>
    );
  };
  return (
    <Container>
      <h1>Escolha de atividades</h1>
      <DaysContainer>
        {
          daysEvent.map((value, index) => 
            <Day day={value} setDayTrial={setDayTrial} dayTrial={dayTrial} setActvesGet={setActvesGet} key={index}/>
          
          )
        }
      </DaysContainer>
      <Trails>
        {
          trialsEvent.map((value, index) => <Trail trail = {value} allTrail = {actvesGet} key={index}/>)
        }
      </Trails>
    </Container>
  );
}
