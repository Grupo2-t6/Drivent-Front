import api from './api';
import { toast } from 'react-toastify';

export async function getActivitieApi(day, token) {
  console.log(day);
  try{
    const activitiesForDay = await api.get('/activitiesGetA', { day }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return activitiesForDay.data;
  }catch(err) {
    console.log(err.response.status);
    const statusErr = err.response.status;
    if(statusErr === 409) {
      toast('Ingresso já comprado!');
    }
    return false;
  }
}
