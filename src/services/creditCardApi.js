import api from './api';
import { toast } from 'react-toastify';

export async function creditCardApi(paymentData, token) {
  try{
    let isApproved = true;
    await api.post('/payment', paymentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return isApproved;
  }catch(err) {
    console.log(err.response.status);
    const statusErr = err.response.status;
    if(statusErr === 409) {
      toast('Ingresso já comprado!');
    }
    return false;
  }
}
