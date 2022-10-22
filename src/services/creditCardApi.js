import api from './api';

export async function creditCardApi(paymentData) {
  console.log(paymentData);
  const response = await api.post('/payment', paymentData);
  return response.data;
}
//
