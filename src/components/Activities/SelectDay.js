import { DayStyle } from '../../pages/Dashboard/Activities/Styled';
import { useEffect } from 'react';
import { getActivitieApi } from '../../services/getActivitieApi';

const actvesTest = {
  activitiesPrincipal: [{ name: 'Minecraft', startTime: '9:00', finalTime: '11:00' }],
  activitiesLateral: [],
  activitiesWorkshop: [{ name: 'Minecraft', startTime: '9:00', finalTime: '10:00' }],
};

const actves = {
  activitiesPrincipal: [{ name: 'Minecraft: montando o PC ideal', startTime: '9:00', finalTime: '11:00' }, { name: 'Minecraft: montando o PC ideal', startTime: '10:00', finalTime: '11:00' }, { name: 'Minecraft: montando o PC ideal', startTime: '9:00', finalTime: '11:00' }],
  
  activitiesLateral: [{ name: 'Minecraft: montando o PC ideal', startTime: '9:00', finalTime: '11:00' }],
  
  activitiesWorkshop: [{ name: 'Minecraft: montando o PC ideal', startTime: '9:00', finalTime: '10:00' }],
};

export default function Day({ day, setDayTrial, dayTrial, setActvesGet }) {
  function getActivitieDay(day) {
    setDayTrial(day);
  };

  async function setDay() {
    const activitiesForDay = await getActivitieApi(day, 'Token.hcdisa');
    console.log(activitiesForDay);
    setActvesGet(actves);
  };

  let picked = false;
  if(dayTrial===day) {
    useEffect(() => {
      setDay();
    }, []);
    picked=true;
  };
  return(
    <DayStyle onClick={() => getActivitieDay(day)} background={picked ? '#FFEED2' : '#E0E0E0'}>
      <h4>{day}</h4>
    </DayStyle>
  );
};
