
import { useState } from 'react';
import Activitie from '../../../components/Activities';
import{ Container, DaysContainer, Trails, TrailStyle, ActivitiesStyled, DayStyle } from './Styled';

const actves = {
  activitiesPrincipal: [{ nameActiv: 'Minecraft: montando o PC ideal', initTime: 9.00, endTime: 11.00 }, { nameActiv: 'Minecraft: montando o PC ideal', initTime: 10.00, endTime: 11.00 }, { nameActiv: 'Minecraft: montando o PC ideal', initTime: 9.00, endTime: 11.00 }],

  activitiesLateral: [{ nameActiv: 'Minecraft: montando o PC ideal', initTime: 9.00, endTime: 11.00 }],

  activitiesWorkshop: [{ nameActiv: 'Minecraft: montando o PC ideal', initTime: 9.00, endTime: 10.00 }],
};

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
  
  function Trail({ arrayTrail, trail }) {
    return(
      <TrailStyle onClick={(trail) => console.log('trail')}>
        <h4>{trail}</h4>
        <ActivitiesStyled>
          {
            arrayTrail.map(value => <Activitie nameActivT={value.nameActiv} initTimeT = {value.initTime} endTimeT = {value.endTime} />)
          }
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
        <Trail trail = 'Auditório Principal' arrayTrail = {actves.activitiesPrincipal}/>
        <Trail trail = 'Auditório Lateral' arrayTrail = {actves.activitiesLateral}/>
        <Trail trail = 'Sala de Workshop' arrayTrail = {actves.activitiesWorkshop}/>
      </Trails>
    </Container>
  );
}
