import api from './api';

export async function getPayment(token) {
  try{
    let isPayment = await api.get('/payment', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return isPayment;
  }catch{
    return false;
  }
}
