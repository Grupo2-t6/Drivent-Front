import api from './api';

export async function creditCard(email, password) {
  const response = await api.post('/users', { email, password });
  return response.data;
}
//
