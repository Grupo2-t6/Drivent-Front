import api from './api';

export async function creditCardApi(paymentData, token) {
  try{
    let isApproved = true;
    api.post('/payment', paymentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return isApproved;
  }catch{
    return false;
  }
}
