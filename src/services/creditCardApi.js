import api from './api';

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
    console.log(err.response.data);
    return false;
  }
}
