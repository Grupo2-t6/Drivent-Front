import { DayStyle } from '../../pages/Dashboard/Activities/Styled';
import { useEffect } from 'react';
import { getActivitieApi } from '../../services/getActivitieApi';

const actvesTest = {
  activitiesPrincipal: [{ nameActiv: 'Minecraft', initTime: 9.00, endTime: 11.00 }],
  activitiesLateral: [],
  activitiesWorkshop: [{ nameActiv: 'Minecraft', initTime: 9.00, endTime: 10.00 }],
};

const actves = {
  activitiesPrincipal: [{ nameActiv: 'Minecraft: montando o PC ideal', initTime: 9.00, endTime: 11.00 }, { nameActiv: 'Minecraft: montando o PC ideal', initTime: 10.00, endTime: 11.00 }, { nameActiv: 'Minecraft: montando o PC ideal', initTime: 9.00, endTime: 11.00 }],
  
  activitiesLateral: [{ nameActiv: 'Minecraft: montando o PC ideal', initTime: 9.00, endTime: 11.00 }],
  
  activitiesWorkshop: [{ nameActiv: 'Minecraft: montando o PC ideal', initTime: 9.00, endTime: 10.00 }],
};

export default function Day({ day, setDayTrial, dayTrial, setActvesGet }) {
  function getActivitieDay(day) {
    setDayTrial(day);
  };

  async function setDay() {
    const activitiesForDay = await getActivitieApi(day, 'Token.hcdisa');
    console.log(activitiesForDay);
    setActvesGet(activitiesForDay);
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
